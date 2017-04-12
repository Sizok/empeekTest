(function () {
    function cropCtrl(getImageService, canvasService, resizeCanvasService, editCanvasService, $rootScope) {
        var ctrl = this;
        ctrl.getImageService = getImageService;
        ctrl.canvasService = canvasService;
        ctrl.resizeCanvasService = resizeCanvasService;
        ctrl.editCanvasService = editCanvasService;
        ctrl.canvasSize = 'sm';
        ctrl.img =[];
        ctrl.index = 0;
        ctrl.rootScope = $rootScope;
        ctrl.rootScope.controllPanel = false;
        //load img base
        ctrl.$onInit = function() {
      	   ctrl.img = ctrl.images;
           ctrl.canvasService.creatCanvas();
           ctrl.resizeCanvasService.resizeCanvas(ctrl.canvasSize);
           ctrl.canvasService.drawImage(ctrl.img[0]);
          };


        ctrl.resizeCanvas = function(size) {
          ctrl.canvasSize = size;
          ctrl.resizeCanvasService.resizeCanvas(ctrl.canvasSize);
          ctrl.canvasService.drawImage(ctrl.img[ctrl.index]);
          };

        ctrl.drawImage = function(index){
          if(index){
            ctrl.index = index;
          }
          ctrl.canvasService.drawImage(ctrl.img[ctrl.index]);
        };
      ctrl.doneEditWindow = function(){
        ctrl.rootScope.controllPanel = false;
        ctrl.canvasService.imageCenter = false;
        ctrl.editCanvasService.doneResizeCanvasWindow(ctrl.img[ctrl.index]);
      }

      ctrl.openEditWindow = function(){
        ctrl.canvasService.imageCenter = true;
        ctrl.rootScope.controllPanel = true;
        ctrl.editCanvasService.resizeCanvasWindow(ctrl.img[ctrl.index]);
      }

    }

    cropCtrl.$inject = ['getImageService', 'canvasService', 'resizeCanvasService', 'editCanvasService', '$rootScope'];

    angular.module('crop')
        .component('homePage', {
            templateUrl: 'js/app/home/homePage.html',
            bindings: {
               images: '<'
           },
            controller: cropCtrl
        });
})();
