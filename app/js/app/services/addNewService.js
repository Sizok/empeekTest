(function () {
    function addNewService(localStorageService) {
        var factory = {};

        factory.addNew = function(newItem){
          localStorageService.set('news', newItem);
        }


        return factory;
    }

    addNewService.$inject = ['localStorageService'];

    angular.module('addNew.Service', []).factory('addNewService', addNewService);
})();
