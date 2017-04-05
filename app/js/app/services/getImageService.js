(function () {
    function getImageService($http) {
        var factory = {};

        factory.getImage = function(){
          return $http.get('js/app/imageBase.json').then(function(result){
              return result.data;
            });
        };


        return factory;
    }

    getImageService.$inject = ['$http'];
    angular.module('getImage.Service', []).factory('getImageService', getImageService);
})();
