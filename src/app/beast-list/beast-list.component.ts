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

  private monsterList: MonsterRecord[];
  public filteredMonsterList: Observable<MonsterRecord[]>;
  public searchControl: FormControl = new FormControl('');

  constructor(private monstersService: MonstersService) {
  }

  ngOnInit() {
    this.monstersService.getMonsters((c: MonsterRecord) => {
      const lowerCaseType = c.type.toLowerCase();
      return lowerCaseType.includes('animal') || lowerCaseType.includes('magical beast') || lowerCaseType.includes('elemental');
    }).then(creatures => {
      this.monsterList = creatures;
      this.filteredMonsterList = this.searchControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    });
  }

  private _filter(value: string): MonsterRecord[] {
    const filterValue = value.toLowerCase();

    return this.monsterList.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  loadFulltext(beast: MonsterRecord) {
    if (!beast.getFulltext()) {
      this.monstersService.getMonsterFullText(beast.get('id')).then(text => {
        beast.setFulltext(text);
      }).catch();
    }
  }
}
