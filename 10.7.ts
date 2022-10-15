// // 화살표 함수
// function add1(a, b){
//     return a + b
// }

// const add2 = (a, b) => a + b

// console.log(add1(1, 2))
// console.log(add2(2, 3))


// 클래스

abstract class Animal{
    constructor(public name?: string, public age?: number){}

    abstract say(): string
}

class Cat extends Animal{
    say(): string {
        return "야옹"
    }
}

class Dog extends Animal{
    say(): string {
        return "멍멍"
    }
}

let animals: Animal[] = [new Cat('야옹이', 2), new Dog("멍멍이", 3)];
let sounds = animals.map(a => a.say())

console.log(sounds)

