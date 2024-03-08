import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilterOptions } from 'src/app/models/filter-options';
import { Paginator } from 'src/app/models/paginator';
import { Person } from 'src/app/models/person';

@Injectable({
  providedIn: 'root'
})
export class SearchApi {

  private readonly API = 'https://abitus-api.pjc.mt.gov.br/v1/pessoas';

  constructor(private httpClient: HttpClient) { }

  getAllWithFilters(filters: FilterOptions, paginator: Paginator): Observable<any> {
    let params = new HttpParams();

    params = this.addFiltersToParams(params, filters);

    if (paginator !== null) {
        params = this.addPaginationToParams(params, paginator);
      } else {
        params = params.set('pagina', '0');
        params = params.set('porPagina', '12');
      }

    return this.httpClient.get<Person[]>(this.API + '/aberto/filtro', { params: params });
  }

  getById(id: number) {
    return this.httpClient.get<Person>(`${this.API}/${id}`);
  }


  private addFiltersToParams(params: HttpParams, filters: FilterOptions): HttpParams {
    params = params.set('nome', filters.nome || '');
    params = params.set('faixaIdadeInicial', filters.ageMin ? filters.ageMin.toString() : '');
    params = params.set('faixaIdadeFinal', filters.ageMax ? filters.ageMax.toString() : '');
    params = params.set('sexo', filters.genre || '');
    return params;
  }

  private addPaginationToParams(params: HttpParams, paginator: Paginator): HttpParams {
    params = params.set('pagina', paginator.page ? paginator.page.toString() : '0');
    params = params.set('porPagina', paginator.resultsPerPage ? paginator.resultsPerPage.toString() : '12');
    return params;
  }


}
