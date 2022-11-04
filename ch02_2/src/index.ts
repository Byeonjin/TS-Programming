/* 
import IPerson from './person/IPerson'
import Person, {makePerson} from './person/Person'

const testMakePerson = (): void => {
    let jane: IPerson = makePerson('Jane')
    let jack: IPerson = makePerson('Jack')
    console.log(jane, jack)
}

testMakePerson() 
 */

import IPerson from "./person/IPerson";
import Person from "./person/Person";

import Chance from "chance"
import * as R from "ramda"
// 외부 패키지 import

const chance = new Chance();
let persons: IPerson[] = R.range(0, 2).map((n:number) => new Person(chance.name(), chance.age()))
console.log(R.range(0,2))
console.log(persons)
