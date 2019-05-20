import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MonsterRecord} from './model/MonsterRecord';
import {Monster} from './model/Monster';

@Injectable({
  providedIn: 'root'
})
export class MonstersService {

  private dashboardMonsters: MonsterRecord[] = [];
  private allMonsters: MonsterRecord[];

  constructor(private httpClient: HttpClient) {

  }

  getDashboardMonsters(): MonsterRecord[] {
    return this.dashboardMonsters;
  }

  public addToDashboard(m: MonsterRecord) {
    this.dashboardMonsters.push(m);
  }


  public getMonsters(filter: (c: MonsterRecord) => boolean): Promise<MonsterRecord[]> {

    return this.getMonstersObservable().then(creatures => {
      return creatures.filter(filter);
    });
  }


  private getMonstersObservable(): Promise<MonsterRecord[]> {
    if (this.allMonsters) {
      return new Promise(resolve => {
        resolve(this.allMonsters);
      });
    } else {
      return this.httpClient.get<Monster[]>('assets/beasts.json').toPromise().then(creatures => {
          const monsterRecords = creatures.map(creature => new MonsterRecord(creature));
          this.allMonsters = monsterRecords;
          return monsterRecords;
        }
      );
    }
  }

  removeFromDashboard(index: number) {
    this.dashboardMonsters.splice(index, 1);
  }

  loadFullText(beast: MonsterRecord) {
    if (!beast.getFulltext()) {
      this.getMonsterFullText(beast.get('id')).then(text => {
        beast.setFulltext(text);
      });
    }
  }

  private getMonsterFullText(id: string): Promise<string> {
    return this.httpClient.get('assets/monstersFullText/' + id + '.html', {
      responseType: 'text'
    }).toPromise();
  }
}
