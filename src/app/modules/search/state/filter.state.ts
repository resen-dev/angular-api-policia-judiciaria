import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { FilterOptions } from "src/app/models/filter-options";

@Injectable({
    providedIn: 'root'
})
export class FilterState{
    
    private readonly _filter = new BehaviorSubject<FilterOptions>({})

    get filter$(): Observable<FilterOptions>{
        return this._filter.asObservable()
    }

    get filter(): FilterOptions{
        return this._filter.value
    }

    setFilter(updatedFilter: FilterOptions){
        this._filter.next(updatedFilter)
    }

    setNome(nome?: string){
        if(!nome) nome = undefined
        console.log("nome: ", nome)
        this.setFilter({ ...this.filter, nome: nome })
    }

    setAgeMin(ageMin?: number){
        if(!ageMin || ageMin === 0) ageMin = undefined
        console.log("ageMin: ", ageMin)
        this.setFilter({ ...this.filter, ageMin: ageMin })
    }

    setAgeMax(ageMax?: number){
        if(!ageMax || ageMax === 0) ageMax = undefined
        console.log("ageMax: ", ageMax)
        this.setFilter({ ...this.filter, ageMax: ageMax })
    }

    setGenre(genre?: string){
        if(!genre) genre = undefined
        console.log("genre: ", genre)
        this.setFilter({ ...this.filter, genre: genre })
    }
}