export function makePerson(name: string, age: number){
    return {name: name, age: age}
    // return type object
}

export function testMakePerson(){
    console.log(
        typeof makePerson("Jane", 22), // 실행 결과 object
        makePerson("Jack", 33)
    )
}