angular.module('crop', [
  'ui.router',
  'ui.bootstrap',
  'getImage.Service',
  'canvas.Service',
  'resizeCanvas.Service',
  'editCanvas.Service',
  'cropImage.Service',
  'crop.home'
  ])
.config(['$locationProvider', '$urlRouterProvider', '$httpProvider', '$sceDelegateProvider', function ($locationProvider, $urlRouterProvider, $httpProvider, $sceDelegateProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

    $urlRouterProvider.otherwise("/notfound");
}]);
