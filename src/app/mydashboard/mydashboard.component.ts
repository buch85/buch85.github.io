import {Component} from '@angular/core';
import {MonstersService} from '../monsters.service';
import {MonsterRecord} from '../model/MonsterRecord';

@Component({
  selector: 'app-mydashboard',
  templateUrl: './mydashboard.component.html',
  styleUrls: ['./mydashboard.component.css']
})
export class MydashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  monsters: MonsterRecord[];

  constructor(private monstersService: MonstersService) {
    this.monsters = monstersService.getDashboardMonsters();
  }

  removeFromDashboard(index: number) {
    this.monstersService.removeFromDashboard(index);
    this.monsters = this.monstersService.getDashboardMonsters();
  }
}
