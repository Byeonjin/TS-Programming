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

const arr = [1, 2, 3, 4, 5]



//const [...b, c] = arr //--> error: rest 요소는 배열 구조 파괴 패턴의 마지막 요소여야 합니다.

const [d, e, f, g, ...h] = arr // 나머지 요소는 array로 저장된다. element가 하나여도 배열로 저장된다.

console.log(d, e, f, g, h)


let a = 1, b = 2;

//b, a = a, b

//console.log(a,b) // 예상 출력 --> 2 1
// 그러나 실제출력 1 2

[a, b] = [b, a]

console.log(a,b) // 예상 출력 --> 2 1
// 실제 출력 2 1

