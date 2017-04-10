(function () {
    function cropCtrl(getImageService, canvasService, resizeCanvasService, editCanvasService) {
        var ctrl = this;
        ctrl.getImageService = getImageService;
        ctrl.canvasService = canvasService;
        ctrl.resizeCanvasService = resizeCanvasService;
        ctrl.editCanvasService = editCanvasService;
        ctrl.canvasSize = 'sm';
        ctrl.img =[];
        ctrl.index = 0;
        //load img base
        ctrl.$onInit = function() {
      	   ctrl.img = ctrl.images;
           ctrl.canvasService.creatCanvas();
           ctrl.resizeCanvasService.resizeCanvas(ctrl.canvasSize);
           ctrl.canvasService.drawImage(ctrl.img[0]);
          };


        ctrl.resizeCanvas = function(size) {
          var index = ctrl.index;
          ctrl.canvasSize = size;
          ctrl.resizeCanvasService.resizeCanvas(ctrl.canvasSize);
          ctrl.canvasService.drawImage(ctrl.img[index]);
          }

        ctrl.drawImage = function(index){
          ctrl.index = index;
          ctrl.canvasService.drawImage(ctrl.img[index]);
        }

      ctrl.openEditWindow = function(){
        var index = ctrl.index;
        ctrl.editCanvasService.resizeCanvasWindow(ctrl.img[index]);
      }

    }

    cropCtrl.$inject = ['getImageService', 'canvasService', 'resizeCanvasService', 'editCanvasService'];

    angular.module('crop')
        .component('homePage', {
            templateUrl: 'js/app/home/homePage.html',
            bindings: {
               images: '<'
           },
            controller: cropCtrl
        });
})();
