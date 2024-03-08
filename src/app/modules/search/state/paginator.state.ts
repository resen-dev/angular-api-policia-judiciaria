import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Paginator } from "src/app/models/paginator";

@Injectable({
    providedIn: 'root'
})
export class PaginatorState{
    
    private readonly _paginator = new BehaviorSubject<Paginator>({page: 0, resultsPerPage: 12})

    get paginator$(): Observable<Paginator>{
        return this._paginator.asObservable()
    }

    get paginator(): Paginator{
        return this._paginator.value
    }

    setPaginator(updatedPaginator: Paginator){
        this._paginator.next(updatedPaginator)
    }
}