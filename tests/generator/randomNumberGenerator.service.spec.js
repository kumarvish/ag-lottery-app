
console.log('tests for randomNumberGeneratorService')

describe('Service: randomNumberGeneratorService', function () {
    var generatorService, numbers;
    beforeEach(module('lotteryApp'));

    beforeEach(inject(function (_randomNumberGeneratorService_) {
        generatorService = _randomNumberGeneratorService_;
        numbers = generatorService.getNewNumbers(1, 5, 5)
    }));

    it('should return 5 items', function () {
        expect(numbers.length).toBe(5);
    });

    it('should contain 1',function(){
        expect(numbers).toContain(1);
    })

    it('should contain 2',function(){
        expect(numbers).toContain(2);
    })

    it('should contain 3',function(){
        expect(numbers).toContain(3);
    })

    it('should contain 4',function(){
        expect(numbers).toContain(4);
    })

    it('should contain 5',function(){
        expect(numbers).toContain(5);
    })

    it('should not have number greater than 5',function(){
        for(var i = 0;i<numbers.length;i++){
            expect(numbers[i]).toBeLessThan(6);
            expect(numbers[i]).toBeGreaterThan(0);
        }
    })
});

describe('randomNumberGeneratorService', function () {
    var generatorService, numbers;
    beforeEach(module('lotteryApp'));

    beforeEach(inject(function (_randomNumberGeneratorService_) {
        generatorService = _randomNumberGeneratorService_;
        numbers = generatorService.getNumbers(1, 5, 5)
    }));

    it('should return 5 items', function () {
        expect(numbers.length).toBe(5);
    });

    it('should contain 1',function(){
        expect(numbers).toContain(1);
    })

    it('should contain 2',function(){
        expect(numbers).toContain(2);
    })

    it('should contain 3',function(){
        expect(numbers).toContain(3);
    })

    it('should contain 4',function(){
        expect(numbers).toContain(4);
    })

    it('should contain 5',function(){
        expect(numbers).toContain(5);
    })

    it('should not have number greater than 5',function(){
        for(var i = 0;i<numbers.length;i++){
            expect(numbers[i]).toBeLessThan(6);
            expect(numbers[i]).toBeGreaterThan(0);
        }
    })

});


describe('randomNumberGeneratorService', function () {
    var generatorService, numbers;
    beforeEach(module('lotteryApp'));

    beforeEach(inject(function (_randomNumberGeneratorService_) {
        generatorService = _randomNumberGeneratorService_;
        numbers = generatorService.getNumbers(1, 49, 6)
    }));

    it('should return 6 items', function () {
        expect(numbers.length).toBe(6);
    });

    it('should not have number greater than 49',function(){
        for(var i = 0;i<numbers.length;i++){
            expect(numbers[i]).toBeLessThan(50);
            expect(numbers[i]).toBeGreaterThan(0);
        }
    })
});