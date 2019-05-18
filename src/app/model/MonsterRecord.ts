import {Record} from 'immutable';
import {emptyMonster, Monster} from './Monster';


export class MonsterRecord extends Record(emptyMonster) implements Monster {


}
