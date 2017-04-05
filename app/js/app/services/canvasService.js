(function () {
    function canvasService() {
        var factory = {};
        factory.drawImage = function (imgSrc, valueCanvasSize, drawCoube) {
          var imageSize = {};
          var position = {};
          var coube = false;
          var coubeSize = valueCanvasSize;
          if(drawCoube){
            coube = drawCoube;
          }
          debugger;
          var canvas = document.getElementById('fabricCanvas');
          var context = canvas.getContext('2d');
          var imageObj = new Image();
          position.x = 0;
          position.y = 0
          imageSize.width = document.getElementById('fabricCanvas').offsetWidth;
          imageSize.height = document.getElementById('fabricCanvas').offsetHeight;
          if(imageSize.height > imageSize.width){
            imageSize.width = imageSize.height * 1.5;
            position.x = -imageSize.width / 3;
          }
          if(canvas.height < canvas.width){
            imageSize.height = imageSize.width * 0.8;
            position.y = -(imageSize.height - canvas.height) / 2;
          }

          imageObj.onload = function() {
          context.drawImage(imageObj, position.x, position.y, imageSize.width, imageSize.height);
              };
          imageObj.src = imgSrc.src;

          if(coube == true){
            debugger;
            drawCoubeFunction(coubeSize);
          }
          function drawCoubeFunction(coubeSize){
            debugger;
            context.strokeRect(0, 0, coubeSize.width, coubeSize.height);
            context.strokeStyle = "#000";
          };
        }


        return factory;
    }

    canvasService.$inject = [];
    angular.module('canvas.Service', []).factory('canvasService', canvasService);
})();
