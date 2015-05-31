angular.module('lotteryApp')
    .constant('appConfig', {
        mainLotteryNumber: {
            minNumber: 1,
            maxNumber: 49,
            noOfItems: 6
        },
        bonusLotteryNumber: {}
    });
