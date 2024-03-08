import { Injectable } from "@angular/core";
import { FilterState } from "../state/filter.state";
import { Observable } from "rxjs";
import { FilterOptions } from "src/app/models/filter-options";
import { SearchApi } from "../api/search.api";
import { Paginator } from "src/app/models/paginator";
import { PaginatorState } from "../state/paginator.state";
import { Person } from "src/app/models/person";
import { PersonState } from "../state/person.state";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class SearchFacade{

    filter$: Observable<FilterOptions> = this.filterState.filter$
    paginator$: Observable<Paginator> = this.paginatorState.paginator$

    persons$: Observable<Person[]> = this.personState.persons$
    totalElements$: Observable<number> = this.personState.totalElements$
    totalPages$: Observable<number> = this.personState.totalPages$
    selectedPerson$: Observable<Person | undefined> = this.personState.selectedPerson$

    constructor(
        private filterState: FilterState,
        private paginatorState: PaginatorState,
        private personState: PersonState,
        private searchApi: SearchApi,
        private router: Router) { }

    setFilterNome(nome?: string){
        this.filterState.setNome(nome)
    }

    setFilterAgeMin(ageMin?: number){
        this.filterState.setAgeMin(ageMin)
    }

    setFilterAgeMax(ageMax?: number){
        this.filterState.setAgeMax(ageMax)
    }

    setFilterGenre(genre?: string){
        this.filterState.setGenre(genre)
    }

    getAllWithFilters() {
        this.searchApi.getAllWithFilters(this.filterState.filter, this.paginatorState.paginator).subscribe({
            next: response => {
                this.personState.setPersons(response.content)
                this.personState.setTotalPages(response.totalPages)
                this.personState.setTotalElements(response.totalElements)
            },
            error: error => {
                console.log(error)
            }
        })
    }
  
    resetSearch(){
        this.paginatorState.setPaginator({...this.paginatorState.paginator, page: 0})
        this.getAllWithFilters()
    }

    updatePaginatorAndSearch(paginator: Paginator){
        this.paginatorState.setPaginator(paginator)
        this.getAllWithFilters()
    }

    showPersonDetails(person: Person){
        this.personState.setPerson(person)
        this.router.navigate(['/person-details/', person.id])
    }

    getById(id: number) {
        this.searchApi.getById(id).subscribe({
            next: response => {
                this.personState.setPerson(response)
            },
            error: error => {
                console.log(error)
            }
        })
    }

    resetFilter() {
        this.filterState.setFilter({ageMax: undefined, ageMin: undefined, genre: undefined, nome:undefined} as FilterOptions)
    }
}