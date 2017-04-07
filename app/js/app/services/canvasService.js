(function () {
    function canvasService() {
        var factory = {};
        factory.drawImage = function (imgSrc, valueCanvasSize, drawCoube) {
          var imageSize = {};
          debugger;
          imageSize.width = document.getElementById('fabricCanvas').offsetWidth;
          imageSize.height = document.getElementById('fabricCanvas').offsetHeight;
          var position = {};
          var canvas = new fabric.Canvas('fabricCanvas');
          var context = canvas.getContext('2d');
          fabric.Image.fromURL(imgSrc.src, function(imageObj) {
            debugger;
          imageObj.scale(1);
          imageObj.width = imageSize.width;
          imageObj.height = imageSize.height;
          canvas.add(imageObj);
        });




          // position.x = 0;
          // position.y = 0
          // imageSize.width = document.getElementById('fabricCanvas').offsetWidth;
          // imageSize.height = document.getElementById('fabricCanvas').offsetHeight;
          // if(imageSize.height > imageSize.width){
          //   imageSize.width = imageSize.height * 1.5;
          //   position.x = -imageSize.width / 3;
          // }
          // if(canvas.height < canvas.width){
          //   imageSize.height = imageSize.width * 0.6;
          //   position.y = -(imageSize.height - canvas.height) / 2;
          // }
          //
          // // imageObj.onload = function() {
          // // context.drawImage(imageObj, position.x, position.y, imageSize.width, imageSize.height);
          // //     };
          // // imageObj.src = imgSrc.src;
          //
          // if(coube == true){
          //   debugger;
          //   drawCoubeFunction(coubeSize);
          // }
          // function drawCoubeFunction(coubeSize){
          //   debugger;
          //   context.strokeRect(0, 0, coubeSize.width, coubeSize.height);
          //   context.strokeStyle = "#000";
          // };
        }


        return factory;
    }

    canvasService.$inject = [];
    angular.module('canvas.Service', []).factory('canvasService', canvasService);
})();
