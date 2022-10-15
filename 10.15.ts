//1. ESNext 특징

//(1) 생성기
/*
function* gen(){
    yield* [1, 2, 3]
}
for(let value of gen()){ console.log(value) }
*/

//(2) Promise, async/await
/*
async function get() {
    let values = []
    values.push(await Promise.resolve(1))
    values.push(await Promise.resolve(2))
    values.push(await Promise.resolve(3))
    values.push(await Promise.resolve(3))
    return values
}

get().then(values => console.log(values))
*/

//2. TS 고유 문법

//(1) 타입 주석, 타입 추론
/*
const m : number = 1;
const n = 2;
*/

//(2) 인터페이스
/*
interface Person {
    name: string,
    age?: number
}

let person: Person = {name : "otter"}

console.log(person.name);
*/

//(3) 튜플
/* 
const arr: number[] = [1, 2, 3, 4] // 배열
const tup: [boolean, number, string] = [true, 1, "string"] //튜플
 */

// 막간의 vs code short cut! shift + option + a => 블럭 주석