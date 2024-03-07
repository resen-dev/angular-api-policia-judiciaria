import { Injectable } from "@angular/core";
import { FilterState } from "../state/filter.state";
import { Observable } from "rxjs";
import { FilterOptions } from "src/app/models/filterOptions";

@Injectable({
    providedIn: 'root'
})
export class SearchFacade{

    filter$: Observable<FilterOptions> = this.filterState.filter$

    constructor(private filterState: FilterState) { }

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
}