(function () {
    "use strict";
    angular.module('lotteryApp').controller('GeneratorHomeCtrl', GeneratorCtrl);

    GeneratorCtrl.$inject = ['randomNumberGeneratorService','appConfig'];
    function GeneratorCtrl(randomNumberGeneratorService,appConfig) {
        var minNumber = appConfig.mainLotteryNumber.minNumber,
            maxNumber = appConfig.mainLotteryNumber.maxNumber,
            numOfItems = appConfig.mainLotteryNumber.noOfItems;
        var vm = this;
        vm.currentPick = {};
        vm.wishList = [];
        vm.addToWishList = addToWishList;
        vm.removeFromWishList = removeFromWishList;
        vm.getNewNumbers = getNewNumbers;
        vm.clearWishList = clearWishList;

        initialise();

        function initialise() {
            getNumbers();
        }

        function getNumbers() {
            var numbers = randomNumberGeneratorService.getNumbers(minNumber, maxNumber, numOfItems);
            setNumbers(numbers, null)

        }

        function getNewNumbers() {
            var numbers = randomNumberGeneratorService.getNewNumbers(minNumber, maxNumber, numOfItems);
            setNumbers(numbers, null)

        }

        function setNumbers(numbers, bonusNumber) {
            vm.currentPick = {
                numbers: numbers,
                bonusNumber: bonusNumber
            }
        }

        function addToWishList() {
            vm.wishList.unshift(vm.currentPick);
            vm.currentPick = {};
        }

        function removeFromWishList(index) {
            vm.wishList.splice(index, 1);
        }

        function clearWishList() {
            vm.wishList = [];
        }
    }
})();