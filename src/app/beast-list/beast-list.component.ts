import {Component, OnInit} from '@angular/core';
import {MonstersService} from '../monsters.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MonsterRecord} from '../model/MonsterRecord';


@Component({
  selector: 'app-beast-list',
  templateUrl: './beast-list.component.html',
  styleUrls: ['./beast-list.component.scss']
})
export class BeastListComponent implements OnInit {

  private beastList: MonsterRecord[];
  public filteredBeastList: Observable<MonsterRecord[]>;
  public searchControl: FormControl = new FormControl('');

  constructor(private beastsService: BeastsService) {
  }

  ngOnInit() {
    this.monstersService.getMonsters((c: MonsterRecord) => c.type === 'Animal' || c.type === 'Magical Beast').then(creatures => {
      this.beastList = creatures;
      this.filteredBeastList = this.searchControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    });
  }

  private _filter(value: string): MonsterRecord[] {
    const filterValue = value.toLowerCase();

    return this.beastList.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
