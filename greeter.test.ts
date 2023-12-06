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
    test('helloPerson given empty name should return `Hello !`' , ()=>{
        const sut = greeter();
        // sut = System under test.
        const expected = 'Hello !';
        // The expected value for the test.
        const input = '';
        
        const actual = sut.helloPerson(input);
        // The actual fuction we want to test.

        expect(actual).toBe(expected);
    })
    test('helloPerson given name of Peter name should return `Hello Peter!`' , ()=>{
        const sut = greeter();
        // sut = System under test.
        const expected = 'Hello Peter!';
        // The expected value for the test.
        const input = 'Peter';

        const actual = sut.helloPerson(input);
        // The actual fuction we want to test.

        expect(actual).toBe(expected);
    })
})