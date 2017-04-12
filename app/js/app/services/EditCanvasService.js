(function () {
    function editCanvasService(canvasService) {
        var factory = {};

          factory.resizeCanvasWindow = function (imgSrc){
            var canvas = canvasService.canvas;
            var oldValue = {};

            oldValue.width = canvas.width;
            oldValue.height = canvas.height;
            canvas.setDimensions({ width: 1024, height: 750 });
            canvas.calcOffset();
            canvasService.sizeRect = oldValue;
            canvasService.rect = true;

            $('#leftMenuPanel').css('display', 'none');
            $('#rightMenuPanel').css('display', 'none');
            $('.canvas-header').css('display', 'none');
            $('#bodyCanvasService').removeClass('col-xs-6');
            $('#bodyCanvasService').addClass('col-xs-12');
            $('.canvas-container').css('width', '1024');
            $('.canvas-container').css('height', '750');

            canvasService.drawImage(imgSrc);
          }
          factory.doneResizeCanvasWindow = function (imgSrc){
            var canvas = canvasService.canvas;
            var oldValue = {};

            canvas.setDimensions({ width: canvasService.sizeRect.width, height: canvasService.sizeRect.height });
            canvas.calcOffset();
            canvasService.rect = false;

            $('#leftMenuPanel').css('display', 'block');
            $('#rightMenuPanel').css('display', 'block');
            $('.canvas-header').css('display', 'block');
            $('#bodyCanvasService').removeClass('col-xs-12');
            $('#bodyCanvasService').addClass('col-xs-6');
            $('.canvas-container').css('width', canvasService.sizeRect.width);
            $('.canvas-container').css('height', canvasService.sizeRect.height);

            canvasService.drawImage(imgSrc);
          }

        return factory;
    }

    editCanvasService.$inject = ['canvasService'];
    angular.module('editCanvas.Service', []).factory('editCanvasService', editCanvasService);
})();
