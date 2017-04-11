(function () {
    function canvasService() {
        var factory = {};
        factory.canvas;
        factory.context;
        factory.oldValueImage = {};
        factory.creatCanvas = function(){
          factory.canvas = new fabric.Canvas('fabricCanvas',{preserveObjectStacking: true});
          factory.context = factory.canvas.getContext('2d');
        }

        factory.drawImage = function (imgSrc, edit, oldValueCanvas) {
          var imageSize = {};
          var editCanvas = false;
          if(edit){
            editCanvas = edit;
          }
          var vulueCanvas = oldValueCanvas;
          var canvas = factory.canvas;
          var context = factory.context;
          var rect;
          if (editCanvas == true){
            rect = new fabric.Rect();
          }


          canvas.on ("object:moving", function (event) {
            var el = event.target;
            var rect = canvas._objects[1];
            // suppose el coords is center based
            el.left = el.left > rect.left ?  rect.left : el.left;
            el.top = el.top < rect.top ? el.top : rect.top;

            var right = rect.left + rect.width;
            var bottom = rect.top + rect.height;

            el.left = right > el.left + el.getBoundingRectWidth() ? right - el.getBoundingRectWidth() : el.left;
            el.top = bottom > el.top + el.getBoundingRectHeight() ? bottom - el.getBoundingRectHeight() : el.top;
          });


          fabric.Image.fromURL(imgSrc.src, function(imageObj) {
          imageObj.scale(1);
          imageObj.lockMovementX = true;
          imageObj.lockMovementY = true;
          imageObj.evented = false;
          imageObj.hasControls = false;
          if(editCanvas == true){

            if(vulueCanvas.height < factory.oldValueImage.height){
              imageObj.lockMovementY = false;
            }
            if(vulueCanvas.width < factory.oldValueImage.width){
              imageObj.lockMovementX = false;
            }
            rect.set({ width: vulueCanvas.width, height: vulueCanvas.height, strokeWidth: 2, stroke: '#2C7BB5', fill: 'rgba(0,0,0,0)'});
            rect.lockMovementX = true;
            rect.lockMovementY = true;
            rect.evented = false;
            imageObj.hasControls = false;
            imageObj.evented = true;
            imageObj.height = factory.oldValueImage.height;
            imageObj.width = factory.oldValueImage.width;
          }else {
            if(canvas.width > canvas.height){
              imageObj.height = canvas.width / 1.2;
              imageObj.width = canvas.width;
            }
            if(canvas.width < canvas.height){
              imageObj.width = canvas.height * 1.5;
              imageObj.height = canvas.height;

            }
            if(canvas.width === canvas.height){
            imageObj.width = canvas.height * 1.2;
            imageObj.height = canvas.height;
            }
            factory.oldValueImage.height = imageObj.height;
            factory.oldValueImage.width = imageObj.width;

          }

          canvas.clear();
          canvas.centerObject(imageObj);
          if(rect){
            canvas.centerObject(rect);
          }
          canvas.add(imageObj);
          if(rect){
            canvas.add(rect);
          }

        });

        }


        return factory;
    }

    canvasService.$inject = [];
    angular.module('canvas.Service', []).factory('canvasService', canvasService);
})();
