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
        factory.filter = 'lightContrast';
        factory.addText = {
          title: 'title',
          body: null,
          caption: null
        };

        factory.creatCanvas = function(){
          factory.canvas = new fabric.Canvas('fabricCanvas',{preserveObjectStacking: true});
          factory.context = factory.canvas.getContext('2d');
          factory.filters[0] = new fabric.Image.filters.Contrast({
            contrast: -40
          });
          factory.filters[1] = new fabric.Image.filters.Contrast({
            contrast: 50
          });
          factory.filters[2] = new fabric.Image.filters.Convolute({
            matrix: [ 1/18, 1/18, 1/18,
                1/18, 1/18, 1/18,
                1/18, 1/18, 1/18,
                1/18, 1/18, 1/18,
                1/18, 1/18, 1/18,
                1/18, 1/18, 1/18 ]

          });
          factory.filters[3] = new fabric.Image.filters.Convolute({
            matrix: [ 1/36, 1/36, 1/36,
                      1/36, 1/36, 1/36,
                      1/36, 1/36, 1/36,
                      1/36, 1/36, 1/36,
                      1/36, 1/36, 1/36,
                      1/36, 1/36, 1/36,
                      1/36, 1/36, 1/36,
                      1/36, 1/36, 1/36,
                      1/36, 1/36, 1/36,
                      1/36, 1/36, 1/36,
                      1/36, 1/36, 1/36,
                      1/36, 1/36, 1/36 ]

          });

          factory.filters[4] = new fabric.Image.filters.Grayscale();
          factory.filters[5] = new fabric.Image.filters.Tint({color: 'rgba(234, 75, 75, 0.5)'});
          factory.filters[6] = new fabric.Image.filters.Tint({color: 'rgba(75, 234, 149, 0.5)'});
          factory.filters[7] = new fabric.Image.filters.Tint({color: 'rgba(75, 125, 234, 0.5)'});
        };

        factory.drawImage = function (imgSrc, imageFilter) {
          var imageSize = {};
          var filter = factory.filter;
          factory.imgSrc = imgSrc;
          var vulueCanvas = factory.sizeRect;
          var canvas = factory.canvas;
          var context = factory.context;
          var rect;
          var titleText;
          var titleTextRect;
          canvas.selection = false;
          if (factory.rect === true){
            rect = new fabric.Rect();
          }
          if (factory.addText.title === 'title'){
            titleText = new fabric.Textbox('Click twice here to edit text', {
              width: 300,
              left: 0,
              top: 0,
              fill: 'white',
              fontFamily: 'OpenSans',
              fontSize: 20,
              borderColor: '#2C7BB5',
              cornerColor: '#2C7BB5',
              cornerStrokeColor: '#2C7BB5',
              fillRule: '#2C7BB5',
              lockScalingY: true,
              padding: 10,
              transparentCorners: false,
              lockSkewingX: true,
              cornerSize: 10,
              lockRotation: true
              });
          }
          if(titleText){
          titleText.setControlsVisibility({
            mt: false,
           mb: false,
           ml: true,
           mr: true,
           bl: false,
           br: false,
           tl: false,
           tr: false,
           mtr: false,
          });
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
          switch (filter) {
                case 'lightContrast':
                    imageObj.filters.push(factory.filters[0]);
                break;
                case 'heavyContrast':
                    imageObj.filters.push(factory.filters[1]);
                break;
                case 'lightBlur':
                    imageObj.filters.push(factory.filters[2]);
                break;
                case 'heavyBlur':
                    imageObj.filters.push(factory.filters[3]);
                break;
                case 'grayscale':
                    imageObj.filters.push(factory.filters[4]);
                break;
                case 'grayscaleBlur':
                    imageObj.filters.push(factory.filters[3]);
                    imageObj.filters.push(factory.filters[4]);
                break;
                case 'redTint':
                    imageObj.filters.push(factory.filters[5]);
                break;
                case 'greenTint':
                    imageObj.filters.push(factory.filters[6]);
                break;
                case 'blueTint':
                    imageObj.filters.push(factory.filters[7]);
                break;
                case 'none':
                    imageObj.filters.splice();
                break;


            }
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
            imageObj.width = canvas.height * 1.4;
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
          if(titleText){
          canvas.add(titleText);
          }
        });

        };


        return factory;
    }

    canvasService.$inject = [];
    angular.module('canvas.Service', []).factory('canvasService', canvasService);
})();
