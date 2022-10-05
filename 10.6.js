// 비구조화 할당(destructing assignment)

const person = {age: 11, name: "otter"}

let {name, age} = person
console.log(age, name)
// 객체 안에 존재하는 property의 이름을 사용해야한다. 순서는 상관 없다.

/* 
let {a, b} = person
console.log(a, b) --> # undefined undefined
*/
// 이 경우 객체 안에 존재하는 property명을 이용하지 않아 undefined를 띄운다.