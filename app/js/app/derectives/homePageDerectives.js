(function () {

    function ngEnter(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind("keydown", function(e) {
                    if(e.which === 13) {
                        scope.$apply(function(){
                            scope.$eval(attrs.ngEnter, {'e': e});
                        });
                        e.preventDefault();
                    }
                });
            }
        }
    }


    ngEnter.$inject = [];

    angular.module("empeek")
        .directive("ngEnter", ngEnter);
})();
