var app = angular.module("petApp", ['ui.router', 'ui.bootstrap', 'ngSanitize', 'ngAnimate']);

app.controller("petAppController", ['$scope', '$rootScope', function ($scope, $rootScope) {

}]);

/*app.run(function ($rootScope, $state) {
 $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if (fromState.name === '' && toState.name !== 'login') {
            event.preventDefault();
            $state.go('login');
        }
    });
});*/

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login', {
            url: '/login'
            , templateUrl: 'login/login.html'
        })
        .state('/', {
            url: '/'
            , templateUrl: 'login/login.html'
        })
        .state('registerationModule', {
            url: '/registerationModule'
            , templateUrl: 'registerationModule/registerationModule.html'
        })
});