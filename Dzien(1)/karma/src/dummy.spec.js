/**
 * Created by 127356 on 2016-09-28.
 */

describe('Nawiasy', function () {
    it('PIerwszy', function () {

        expect(nawiasy("(())()")).toBe(0);

    })
});

describe('Nawiasy', function () {
    it('Drugi', function () {

        expect(nawiasy("((()()")).not.toBe(0);

    })
});


describe('Nawiasy', function () {
    it('Trzeci', function () {

        expect(nawiasy("((A()))")).toBe(0);

    })
});

describe('Nawiasy', function () {
    it('Czwarty', function () {

        expect(nawiasy("())()(")).toBe(-1);

    })
});




describe('Dummy', function(){
    it('runs this test', function () {
         expect(1+5).not.toBe(7);
    });

    it('array values test', function () {
        expect(dummy).toEqual([1,2,3])
    });
});

describe('Dummy', function(){
     it('runs this test', function () {
         expect(1+5).not.toBe(7);
    });

    it('array values test', function () {

        expect(dummy).toEqual([1,2,3])
    });
});

