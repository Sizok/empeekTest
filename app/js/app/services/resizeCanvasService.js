(function () {
    function resizeCanvasService() {
        var factory = {};

        factory.resizeCanvas = function(size){
          debugger;
          var canvasSize = {};
          var canvasObj = document.getElementById('fabricCanvas');
          var canvasSecondObj = document.getElementById('secondFabricCanvas');

          canvasSize.width = 484;
          if (size === 'sm'){
            canvasSize.height = 242;
          }
          if (size === 'md'){
            canvasSize.height = 484;
          }
          if (size === 'lg'){
            canvasSize.height = 725;
          }
          $('.canvas-container').css('width:', canvasSize.width);
          $('.canvas-container').css('width:', canvasSize.heigth);
          canvasObj.width = canvasSize.width;
          canvasObj.height = canvasSize.height;
          canvasSecondObj.width = canvasSize.width;
          canvasSecondObj.height = canvasSize.height;
        }


        return factory;
    }

    resizeCanvasService.$inject = [];
    angular.module('resizeCanvas.Service', []).factory('resizeCanvasService', resizeCanvasService);
})();
