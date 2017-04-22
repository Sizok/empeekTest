(function () {
    function scrollGoBottomService() {
        var factory = {};

        factory.scrollBottom = function () {
            var el = document.getElementById("test");
            el.scrollTop = el.scrollHeight;
        };


        return factory;
    }

    scrollGoBottomService.$inject = [];

    angular.module('scrollGoBottom.Service', []).factory('scrollGoBottomService', scrollGoBottomService);
})();
