// tslint:disable-next-line:no-empty-interface

export interface Creature {
  'Race': string;
  'Category': string;
  'Short Description': string;
  'Size': string;
  'Type': string;
  'Subtype': string;
  'HD': number;
  'Land': number;
  'Burrow': number;
  'Climb': number;
  'Fly': string;
  'Maneuver': string;
  'Swim': string;
  'Natural Armor': number;
  'Natural Attacks': string;
  'Special Attacks': string;
  'Spell-like abilities': string;
  'Psionic abilities': string;
  'Other Special Abilities': string;
  'LowLight Vision': string;
  'Darkvision': string;
  'Other Senses': string;
  'Immunities': string;
  'Vulnerabilities': string;
  'Energy Resistance': string;
  'Spell Resistance': string;
  'Damage Reduction': string;
  'Fast Healing': string;
  'Bonus Essentia': string;
  'Other Special Qualities': string;
  'Str': number;
  'Dex': number;
  'Con': number;
  'Int': number;
  'Wis': number;
  'Cha': number;
  'StrAdj': string;
  'DexAdj': string;
  'ConAdj': string;
  'IntAdj': string;
  'WisAdj': string;
  'ChaAdj': string;
  'Racial Skills': string;
  'Racial Weapon Familiarity': string;
  'Racial Weapon Proficiency': string;
  'Bonus Feat(s)': string;
  'Automatic Languages': string;
  'Bonus Languages': string;
  'Dragonlance Languages': string;
  'CR Adj.': string;
  'Alignment': string;
  'Level Adj.': string;
  'Favored Class': string;
  'Base Age': string;
  'Height': string;
  'Weight': string;
  'Special Qualities': string;
  'Familiar Level': string;
  'Companion Level': number;
  'Familiar Type': string;
  'Companion  Type': string;
  'Wildshape Special': string;
  'Special': string;
  'Index': string;
  'Species': string;
  'Src': string;
  'Pg': number;
  'AltSrc': string;

}

export const emptyCreature: Creature = {
  'Automatic Languages': '',
  'Base Age': '',
  'Bonus Essentia': '',
  'Bonus Feat(s)': '',
  'Bonus Languages': '',
  'CR Adj.': '',
  'Companion  Type': '',
  'Companion Level': 0,
  'Damage Reduction': '',
  'Dragonlance Languages': '',
  'Energy Resistance': '',
  'Familiar Level': '',
  'Familiar Type': '',
  'Fast Healing': '',
  'Favored Class': '',
  'Level Adj.': '',
  'LowLight Vision': '',
  'Natural Armor': 0,
  'Natural Attacks': '',
  'Other Senses': '',
  'Other Special Abilities': '',
  'Other Special Qualities': '',
  'Psionic abilities': '',
  'Racial Skills': '',
  'Racial Weapon Familiarity': '',
  'Racial Weapon Proficiency': '',
  'Short Description': '',
  'Special Attacks': '',
  'Special Qualities': '',
  'Spell Resistance': '',
  'Spell-like abilities': '',
  'Wildshape Special': '',
  Alignment: '',
  AltSrc: '',
  Burrow: 0,
  Category: '',
  Cha: 0,
  ChaAdj: '',
  Climb: 0,
  Con: 0,
  ConAdj: '',
  Darkvision: '',
  Dex: 0,
  DexAdj: '',
  Fly: '',
  HD: 0,
  Height: '',
  Immunities: '',
  Index: '',
  Int: 0,
  IntAdj: '',
  Land: 0,
  Maneuver: '',
  Pg: 0,
  Race: '',
  Size: '',
  Special: '',
  Species: '',
  Src: '',
  Str: 0,
  StrAdj: '',
  Subtype: '',
  Swim: '',
  Type: '',
  Vulnerabilities: '',
  Weight: '',
  Wis: 0,
  WisAdj: ''
};
