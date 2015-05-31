describe('Controller: GeneratorHomeCtrl', function () {

    beforeEach(module('lotteryApp'));
    var ctrl;
    beforeEach(inject(function ($controller) {
        ctrl = $controller('GeneratorHomeCtrl');

    }));

    it('should not be null', function () {
        expect(ctrl.currentPick).not.toBeNull();
    });

    it('should contain 6 numbers', function () {
        var numbers = ctrl.currentPick.numbers;
        expect(numbers.length).toBe(6);
    });

    it('should not have items in wish list', function () {
        expect(ctrl.wishList.length).toBe(0)
    });

    it('should add one item to wish list and current pick should be empty', function () {
        ctrl.addToWishList();
        expect(ctrl.wishList.length).toBe(1);
        expect(ctrl.currentPick.numbers).toBeUndefined();
    });

    it('should allow to remove wish list item based on array index', function () {
        ctrl.addToWishList();
        expect(ctrl.wishList.length).toBe(1);
        ctrl.removeFromWishList(0);
        expect(ctrl.wishList.length).toBe(0);
    });

    it('should allow to remove wish list item based on array index', function () {
        ctrl.addToWishList();
        ctrl.addToWishList();
        expect(ctrl.wishList.length).toBe(2);
        ctrl.clearWishList();
        expect(ctrl.wishList.length).toBe(0);
    });

    it('should allow to generate new numbers',function(){
        ctrl.addToWishList();
        expect(ctrl.wishList.length).toBe(1);
        expect(ctrl.currentPick.numbers).toBeUndefined();
        ctrl.getNewNumbers();
        expect(ctrl.currentPick.numbers).not.toBeUndefined();

    });
});