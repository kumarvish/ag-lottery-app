"use strict";
angular.module('lotteryApp').factory('randomNumberGeneratorService', randomNumberGeneratorService);

function randomNumberGeneratorService() {
    var items = [];

    return {
        getNumbers: getNumbers,
        getNewNumbers: getNewNumbers
    }

    /*
     *Returns an cached items array containing random numbers between min and max values (inclusive)
     *  if cache items is empty, new numbers will be generated
     * @param {number} minValue
     * @param {number} maxValue
     * @param {number} numberOfItems
     * @return {[number]}
     */
    function getNumbers(minValue, maxValue, numberOfItems) {
        if (items.length === 0) {
            return getNewNumbers(minValue, maxValue, numberOfItems);
        }
        return items;
    }

    /*
     *Returns an array containing random numbers between min and max values (inclusive)
     * @param {number} minValue
     * @param {number} maxValue
     * @param {number} numberOfItems
     * @return {[number]}
     */
    function getNewNumbers(minValue, maxValue, numberOfItems) {
        items = [];
        for (var i = minValue; i < maxValue + 1; i++) {
            items.push(i);
        }

        for (var i = maxValue; i > numberOfItems; i--) {
            items.splice(Math.floor(Math.random() * i), 1);
        }
        return items;
    }
}