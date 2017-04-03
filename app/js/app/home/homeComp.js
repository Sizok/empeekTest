(function () {
    function cropCtrl(getImageService) {
        var ctrl = this;
        ctrl.getImageService = getImageService;
        ctrl.img = [];
        debugger;
        ctrl.$onInit = function() {
          debugger;
      	   ctrl.img = ctrl.images;
        };



    }

    cropCtrl.$inject = ['getImageService'];

    angular.module('crop')
        .component('homePage', {
            templateUrl: 'js/app/home/homePage.html',
            bindings: {
                images: '<'
            },
            controller: cropCtrl
        });
})();
