(function () {
    function getNewsLocalStorageService(localStorageService) {
        var factory = {};

        factory.getNews = function(){
          var news = localStorageService.get('news');
          return news;
        };


        return factory;
    }

    getNewsLocalStorageService.$inject = ['localStorageService'];

    angular.module('getNewsLocalStorage.Service', []).factory('getNewsLocalStorageService', getNewsLocalStorageService);
})();
