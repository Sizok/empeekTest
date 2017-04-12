(function () {
    function canvasService() {
        var factory = {};
        factory.canvas;
        factory.context;
        factory.oldValueImage = {};
        factory.zoomValue = {};
        factory.zoomValue.minValue = 1;
        factory.zoomValue.maxValue = 2;
        factory.zoomValue.value = 1;
        factory.rect = false;
        factory.imagePosition = {};
        factory.imageCenter = true;
        factory.imgSrc;
        factory.filters = [];
        factory.creatCanvas = function(){
          factory.canvas = new fabric.Canvas('fabricCanvas',{preserveObjectStacking: true});
          factory.context = factory.canvas.getContext('2d');
          factory.filters[0] = new fabric.Image.filters.BaseFilter();
          factory.filters[1] = new fabric.Image.filters.Multiply({
            color: '#7f7f7f'
          });
          factory.filters[2] = new fabric.Image.filters.Tint({color: 'rgba(183, 182, 170, 0.3)'});
        };

        factory.drawImage = function (imgSrc) {
          var imageSize = {};

          factory.imgSrc = imgSrc;
          var vulueCanvas = factory.sizeRect;
          var canvas = factory.canvas;
          var context = factory.context;
          var rect;
          canvas.selection = false;
          if (factory.rect === true){
            rect = new fabric.Rect();
          }


          canvas.on ("object:moving", function (event) {
            var el = event.target;
            var img = canvas._objects[0];
            var rect = canvas._objects[1];

            el.left = el.left > rect.left ?  rect.left : el.left;
            el.top = el.top < rect.top ? el.top : rect.top;

            var right = rect.left + rect.width;
            var bottom = rect.top + rect.height;

            el.left = right > el.left + el.getBoundingRectWidth() ? right - el.getBoundingRectWidth() : el.left;
            el.top = bottom > el.top + el.getBoundingRectHeight() ? bottom - el.getBoundingRectHeight() : el.top;
            if(rect){
            factory.imagePosition.top = -(rect.top - img.top);
            factory.imagePosition.left = -(rect.left - img.left);
            }
          });

          fabric.Image.fromURL(imgSrc.src, function(imageObj) {
          imageObj.scale(factory.zoomValue.value);
          imageObj.lockMovementX = true;
          imageObj.lockMovementY = true;
          imageObj.evented = false;
          imageObj.hasControls = false;

          imageObj.filters.push(factory.filters[2]);
          imageObj.applyFilters(canvas.renderAll.bind(canvas));
          if(factory.imageCenter === false){
            imageObj.left = factory.imagePosition.left;
            imageObj.top = factory.imagePosition.top;
          }
          if(factory.rect === true){

            rect.set({ width: vulueCanvas.width, height: vulueCanvas.height, strokeWidth: 2, stroke: '#2C7BB5', fill: 'rgba(0,0,0,0)'});
            rect.lockMovementX = true;
            rect.lockMovementY = true;
            rect.evented = false;
            imageObj.hasControls = false;
            imageObj.evented = true;
            imageObj.height = factory.oldValueImage.height;
            imageObj.width = factory.oldValueImage.width;
            if(vulueCanvas.height < imageObj.height){
                imageObj.lockMovementY = false;
            }
            if(vulueCanvas.width < imageObj.width){
                imageObj.lockMovementX = false;
            }
            if(factory.zoomValue.value > 1){
              imageObj.lockMovementY = false;
              imageObj.lockMovementX = false;
            }
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

          if(rect){
            canvas.centerObject(rect);
          }

          if(factory.imageCenter === true){
            canvas.centerObject(imageObj);
          }
          canvas.add(imageObj);
          if(rect){
            canvas.add(rect);
            var elem = $('.controll-panel');
            var coorditates = {};
            coorditates.top = rect.top - elem.height() - 10;
            coorditates.left = rect.left + (rect.width / 2) - (elem.width() / 2);
            elem.css('top', coorditates.top);
            elem.css('left', coorditates.left);
          }
        });

        };


        return factory;
    }

    canvasService.$inject = [];
    angular.module('canvas.Service', []).factory('canvasService', canvasService);
})();
