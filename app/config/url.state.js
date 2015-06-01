angular.module('lotteryApp')
    .config(function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.when('/', '/index');
        $urlRouterProvider.otherwise('/index');

        $stateProvider
            .state('main', {
                url: '/index',
                templateUrl: '/partials/home/view/default'
            })

            .state('generator', {
                url: '/generator',
                templateUrl: '/partials/generator/view/home',
                controller:'GeneratorHomeCtrl as generator'
            })
            .state('default', {
                url: '/',
                templateUrl: '/partials/home/view/default'
            })



    });