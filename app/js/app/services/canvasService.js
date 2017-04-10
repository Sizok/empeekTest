(function () {
    function canvasService() {
        var factory = {};
        factory.canvas;
        factory.context;
        factory.creatCanvas = function(){
          factory.canvas = new fabric.Canvas('fabricCanvas');
          factory.context = factory.canvas.getContext('2d');
        }

        factory.drawImage = function (imgSrc) {
          var imageSize = {};
          var position = {};
          var canvas = factory.canvas;
          var context = factory.context;

          fabric.Image.fromURL(imgSrc.src, function(imageObj) {
          imageObj.scale(1);
          imageObj.lockMovementX = true;
          imageObj.lockMovementY = true;
          imageObj.evented = false;
          imageObj.hasControls = false;



          if(canvas.width > canvas.height){
            imageObj.height = canvas.width;
            imageObj.width = canvas.width;
            // imageObj.top =  (imageObj.height - imageSize.height) / -4;
          }
          if(canvas.width < canvas.height){
            imageObj.width = canvas.height * 1.5;
            imageObj.height = canvas.height;
            // imageOgj.alignX = 'mid';

          }else{
          imageObj.width = canvas.width;
          imageObj.height = canvas.height;
          }
          canvas.centerObject(imageObj);
          canvas.add(imageObj);
          // canvas.on('after:render', function(){ this.calcOffset(); });
        });

        // factory.resizeCanvas = function(size){
        //   var canvas = canvasService.canvas;
        //   var canvasSize = {};
        //   canvasSize.width = 484;
        //   if (size === 'sm'){
        //     canvasSize.height = 242;
        //   }
        //   if (size === 'md'){
        //     canvasSize.height = 484;
        //   }
        //   if (size === 'lg'){
        //     canvasSize.height = 725;
        //   }
        //   $('.canvas-container').css('width:', canvasSize.width);
        //   $('.canvas-container').css('height:', canvasSize.heigth);
        //   debugger;
        //   factory.canvas.setWidth(canvasSize.width, 'backstoreOnly');
        //   factory.canvas.setHeight(canvasSize.height, 'backstoreOnly');
        //   factory.canvas.calcOffset();
        // }

        }


        return factory;
    }

    canvasService.$inject = [];
    angular.module('canvas.Service', []).factory('canvasService', canvasService);
})();
