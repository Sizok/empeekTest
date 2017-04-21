(function () {
    angular.module('empeek.home', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                template: '<home-page news-item="$resolve.news"></home-page>',
                data: {
                    pageTitle: 'Home'
                },
                resolve: {
                  news: ['getNewsLocalStorageService', function (getNewsLocalStorageService) {
                    var newsItem = getNewsLocalStorageService.getNews();
                    return newsItem;
                  }]
                }
              })
          }])
  })();


  // .state('admincars', {
  //                   url: "/admin/cars",
  //                   template: '<admin-cars-page></admin-cars-page>',
  //                   data: {
  //                       pageTitle: 'Administrator cars',
  //                       noLogin: false,
  //                   },
  //                   resolve: {
  //                       cars: ['adminCarsService', '$stateParams', function (adminCarsService, $stateParams) {
  //                           adminCarsService.noMoreData = false;
  //                           adminCarsService.cars = [];
  //                           return adminCarsService.getCars();
  //                       }]
  //                   }
  //               })
  // (function () {
  //     angular.module('empeek.home', [])
  //         .config(['$stateProvider', function ($stateProvider) {
  //             $stateProvider.state('home', {
  //                 url: '/',
  //                 template: '<home-page test="$resolve.news"></home-page>',
  //                 data: {
  //                     pageTitle: 'Home'
  //                 },
  //                 resolve: {
  //                    news: ['getNewsLocalStorageService', function (getNewsLocalStorageService) {
  //                      debugger;
  //                        return test = getNewsLocalStorageService.getNews();
  //                    }]}
  //             });
  //         }])
  //
  // })();
