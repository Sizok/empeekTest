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
            // canvas.width = 1024;
            // canvas.height = 750;

            $('#leftMenuPanel').css('display', 'none');
            $('#rightMenuPanel').css('display', 'none');
            $('.canvas-header').css('display', 'none');
            $('#bodyCanvasService').removeClass('col-xs-6');
            $('#bodyCanvasService').addClass('col-xs-12');
            $('.canvas-container').css('width', '1024');
            $('.canvas-container').css('height', '750');

            canvasService.drawImage(imgSrc, true, oldValue);
          }

        return factory;
    }

    editCanvasService.$inject = ['canvasService'];
    angular.module('editCanvas.Service', []).factory('editCanvasService', editCanvasService);
})();
