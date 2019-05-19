import {Record} from 'immutable';
import {emptyMonster, Monster} from './Monster';


export class MonsterRecord extends Record(emptyMonster) implements Monster {

  private fulltext = '';

  setFulltext(fulltext: string) {
    this.fulltext = fulltext;
  }

  getFulltext() {
    return this.fulltext;
  }
}
