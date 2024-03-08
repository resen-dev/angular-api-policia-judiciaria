import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Person } from "src/app/models/person";

@Injectable({
    providedIn: 'root'
})
export class PersonState{
    
    private readonly _persons = new BehaviorSubject<Person[]>([])
    private readonly _totalPages = new BehaviorSubject<number>(0)
    private readonly _totalElements = new BehaviorSubject<number>(0)
    private readonly _selectedPerson = new BehaviorSubject<Person>({} as Person)

    get persons$(): Observable<Person[]>{
        return this._persons.asObservable()
    }

    get totalPages$(): Observable<number>{
        return this._totalPages.asObservable()
    }

    get totalElements$(): Observable<number>{
        return this._totalElements.asObservable()
    }

    get selectedPerson$(): Observable<Person>{
        return this._selectedPerson.asObservable()
    }

    setPersons(persons: Person[]){
        this._persons.next(persons)
    }

    setTotalElements(totalElements: number) {
        this._totalElements.next(totalElements)
    }

    setTotalPages(totalPages: number) {
        this._totalPages.next(totalPages)
    }

    setPerson(person: Person){
        this._selectedPerson.next(person)
    }
}