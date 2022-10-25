"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testMakePerson = exports.makePerson = void 0;
function makePerson(name, age) {
    return { name: name, age: age };
    // return type object
}
exports.makePerson = makePerson;
function testMakePerson() {
    console.log(typeof makePerson("Jane", 22), // 실행 결과 object
    makePerson("Jack", 33));
}
exports.testMakePerson = testMakePerson;
//# sourceMappingURL=makePerson.js.map