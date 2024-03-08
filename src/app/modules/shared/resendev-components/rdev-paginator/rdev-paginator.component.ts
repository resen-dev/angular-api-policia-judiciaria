import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paginator } from 'src/app/models/paginator';

@Component({
  selector: 'rdev-paginator',
  templateUrl: './rdev-paginator.component.html',
  styleUrls: ['./rdev-paginator.component.css']
})
export class RdevPaginatorComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    this.pageChange.emit({page: this.currentPage, resultsPerPage: this.resultsPerPage} as Paginator)
  }

  @Input() totalElements?: number = 10
  @Input() totalElementsLabel: string = "Total elements"
  
  @Input() totalPages?: number

  @Input() showResultsPerPage: boolean = true
  @Input() resultsPerPage: number = 10
  @Input() resultsPerPageLabel: string = "Results per page"
  @Input() pageChangeOnInit: boolean = false
  @Input() currentPage: number = 0

  @Output() pageChange = new EventEmitter<Paginator>();

  protected isFirstPage = (): boolean => { return this.currentPage === 0 }
  protected isLastPage = (): boolean => { 
    if(this.totalPages){
      return this.currentPage >= this.totalPages - 1
    }
    return false
  }

  previousPage(){
    if(!this.isFirstPage()){
      this.currentPage--;
      this.onPageChange()
    }
  }

  nextPage(){
    if(!this.isLastPage()){
      this.currentPage++;
      this.onPageChange()
    }
  }
  
  onPageChange(){
    this.pageChange.emit({page: this.currentPage, resultsPerPage: this.resultsPerPage} as Paginator)
  }
}
