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
  public filteredBeastList: CreatureRecord[];
  public searchControl: FormControl = new FormControl('');
  filteredOptions: Observable<string[]>;
  options: string[] = [];

  constructor(private beastsService: BeastsService) {
    this.searchControl.valueChanges.subscribe(value => {
      this.filteredBeastList = this.beastList.filter(b => b.get('Race').toLowerCase().includes(value.toLowerCase()));
    });
  }

  ngOnInit() {
    this.beastsService.getAll().then(creatures => {
      this.beastList = creatures;
      this.filteredBeastList = [...this.beastList];
      for (const beast of this.beastList) {
        this.options.push(beast.Race);
      }
      this.filteredOptions = this.searchControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
