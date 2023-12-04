import { greeter } from "./greeter"

describe('greeter' , ()=>{

    test('helloWorld given default should return `Hello world!`' , ()=>{
        const sut = greeter();
        // sut = System under test.
        const expected = 'Hello world!';
        // The expected value for the test.

        const actual = sut.helloWorld();
        // The actual fuction we want to test.

        expect(actual).toBe(expected);
    })
})