(function () {
    function getImageService($http) {
        var factory = {};

        factory.getImage = function(){
          return $http.get('js/app/imageBase.json').then(function(data){
              console.log(data.data);
              debugger;
              return data.data;
            });
        };


        return factory;
    }

    getImageService.$inject = ['$http'];
    angular.module('getImage.Service', []).factory('getImageService', getImageService);
})();
