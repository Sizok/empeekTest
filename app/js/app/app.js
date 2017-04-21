angular.module('empeek', [
  'ui.router',
  'LocalStorageModule',
  'empeek.home',
  'addNew.Service',
  'getNewsLocalStorage.Service'
  ])
.config(['$locationProvider', '$urlRouterProvider', '$httpProvider', '$sceDelegateProvider', function ($locationProvider, $urlRouterProvider, $httpProvider, $sceDelegateProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

    $urlRouterProvider.otherwise("/notfound");
}]);
