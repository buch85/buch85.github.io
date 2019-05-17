import {Component, OnInit} from '@angular/core';
import {BeastsService} from '../beasts.service';
import {CreatureRecord} from '../model/CreatureRecord';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-beast-list',
  templateUrl: './beast-list.component.html',
  styleUrls: ['./beast-list.component.scss']
})
export class BeastListComponent implements OnInit {

  private beastList: CreatureRecord[];
  public filteredBeastList: Observable<CreatureRecord[]>;
  public searchControl: FormControl = new FormControl('');

  constructor(private beastsService: BeastsService) {
  }

  ngOnInit() {
    this.beastsService.getAll().then(creatures => {
      this.beastList = creatures;
      this.filteredBeastList = this.searchControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    });
  }

  private _filter(value: string): CreatureRecord[] {
    const filterValue = value.toLowerCase();

    return this.beastList.filter(option => option.Race.toLowerCase().includes(filterValue));
  }
}
