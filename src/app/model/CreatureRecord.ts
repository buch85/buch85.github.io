import {Record} from 'immutable';
import {Creature, emptyCreature} from './Creature';

export class CreatureRecord extends Record(emptyCreature) implements Creature {

  getNaturalAttacks(): string {
    const naturalAttacks = this['Natural Attacks'].split(',');
    return naturalAttacks.map(x => {
      const [name, dice, , strMultiplier] = x.split('+');
      return name + ' ' + dice + ' ' + strMultiplier;
    }).join(', ');
  }
}
