// 5: arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!
///<reference path="../../ES6_Katas/Typings/jasmine.d.ts"/>
describe('arrow functions', function () {

    it('are shorter to write', function () {
        var func = () => 'I am func';
        //expect(func(), 'I am func');
        expect(func()).toEqual('I am func');
    });

    it('a single expression, without curly braces returns too', function () {
        var func = () => 'I return too';
        //assert.equal(func(), 'I return too');
        expect(func()).toEqual('I return too');
    });

    it('one parameter can be written without parens', () => {
        var func = p => p - 1;
        //assert.equal(func (25), 24);
        expect(func(25)).toEqual(24);
    });

    it('many params require parens', () => {
        var func = ((param, param1) => param + param1);
        //assert.equal(func(23, 42), 23+42);
        expect(func(23, 42)).toEqual(23 + 42);
    });

    it('body needs parens to return an object', () => {
        var func = () => ({ iAm: 'an object' });
        //assert.deepEqual(func(), {iAm: 'an object'});
        expect(func()).toEqual({ iAm: 'an object' })
    });

});