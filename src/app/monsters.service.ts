import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MonsterRecord} from './model/MonsterRecord';
import {Monster} from './model/Monster';

@Injectable({
  providedIn: 'root'
})
export class MonstersService {

  constructor(private httpClient: HttpClient) {

  }

  public getMonsters(filter: (c: MonsterRecord) => boolean): Promise<MonsterRecord[]> {
    return this.httpClient.get<Monster[]>('assets/monster.json').toPromise().then(creatures => {
      return creatures.map(creature => new MonsterRecord(creature)).filter(filter);
    });
  }

}
