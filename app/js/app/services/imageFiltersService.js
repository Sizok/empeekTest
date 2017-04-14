(function () {
    function imageFiltersServise(canvasService) {
        var factory = {};
        function addFilter(filterName){
          canvasService.filter = filterName;
        }
        return factory;
    }

    imageFiltersServise.$inject = ['canvasService'];
    angular.module('imageFilters.Service', []).factory('imageFiltersServise', imageFiltersServise);
})();
