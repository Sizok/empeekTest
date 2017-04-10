(function () {
    function resizeCanvasService(canvasService) {
        var factory = {};

        factory.resizeCanvas = function(size){
          var canvas = canvasService.canvas;
            var canvasSize = {};
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
            $('.canvas-container').css('height:', canvasSize.heigth);
            canvas.setDimensions({ width: canvasSize.width, height: canvasSize.height });
            canvas.calcOffset();
        }

        return factory;
    }

    resizeCanvasService.$inject = ['canvasService'];
    angular.module('resizeCanvas.Service', []).factory('resizeCanvasService', resizeCanvasService);
})();
