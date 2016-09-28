/**
 * Created by 127356 on 2016-09-28.
 */


describe('Dummy', function(){
     it('runs this test', function () {
         expect(1+5).not.toBe(7);
    });
       it('efies dummy data'), function () {
         expect(dummy).not.toBeDefined();
     };

    it('array values test', function () {
        var test = [1,2,3];
        expect(dummy).toBe(test);
    })
});

