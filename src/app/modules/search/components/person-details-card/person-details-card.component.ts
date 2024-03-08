import { Component, OnInit } from '@angular/core';
import { SearchFacade } from '../../facade/search.facade';
import { Person } from 'src/app/models/person';
import { ShareService } from 'src/app/services/share.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-details-card',
  templateUrl: './person-details-card.component.html',
  styleUrls: ['./person-details-card.component.css']
})
export class PersonDetailsCardComponent implements OnInit {

  protected selectedPerson$: Observable<Person | undefined> = this.searchfacade.selectedPerson$;

  constructor(
    protected searchfacade: SearchFacade,
    protected shareService: ShareService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedPerson$.subscribe({
      next: (person) => {
        if (!person) {
          this.route.params.subscribe(params => {
            this.searchfacade.getById(params['id'])
          });
        }
      }
    });
  }
}
