(function () {
    function editCanvasService(canvasService) {
        var factory = {};

          factory.resizeCanvasWindow = function (imgSrc){
            debugger;
            var canvasObj = document.getElementById('fabricCanvas');
            var canvasSecondObj = document.getElementById('secondFabricCanvas');
            var oldValue = {};
            var drawCoube = true;
            oldValue.width = canvasObj.width;
            oldValue.height = canvasObj.height;

            canvasObj.width = 1024;
            canvasObj.height = 750;

            $('#leftMenuPanel').css('display', 'none');
            $('#rightMenuPanel').css('display', 'none');
            $('.canvas-header').css('display', 'none');
            $('#bodyCanvasService').removeClass('col-xs-6');
            $('#bodyCanvasService').addClass('col-xs-12');
            debugger;
            canvasService.drawImage(imgSrc, oldValue, drawCoube);
          }

        return factory;
    }

    editCanvasService.$inject = ['canvasService'];
    angular.module('editCanvas.Service', []).factory('editCanvasService', editCanvasService);
})();
