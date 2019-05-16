import {Injectable} from '@angular/core';
import {Creature} from './model/Creature';
import {CreatureRecord} from './model/CreatureRecord';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeastsService {

  constructor(private httpClient: HttpClient) {

  }

  public getAll(): Promise<CreatureRecord[]> {
    return this.httpClient.get<Creature[]>('assets/csvjson.json').toPromise().then(creatures => {
      return creatures.map(creature => new CreatureRecord(creature));
    });
  }

}
