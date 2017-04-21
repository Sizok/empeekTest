(function () {
    function cropCtrl(addNewService) {
        var ctrl = this;
        ctrl.addNewService = addNewService;
        ctrl.news = [];

        ctrl.$onInit = function() {
      	   ctrl.news = ctrl.newsItem;
          };

        ctrl.deleteNew = function (index){
          ctrl.news.splice(index, 1)
          ctrl.addNewService.addNew(ctrl.news);
        }
        ctrl.addNew = function(newItem){
          var post = {
              text: newItem,
              comments: []
          }
          newItem.comments = [];
          ctrl.news.push(post)
          ctrl.addNewService.addNew(ctrl.news);
        }
        ctrl.addComment = function(){
          debugger;
          ctrl.news[0].comments.push(ctrl.messegeItem);
          ctrl.addNewService.addNew(ctrl.news);
          ctrl.messegeItem = "";
        }
    }

    cropCtrl.$inject = ['addNewService'];

    angular.module('empeek')
        .component('homePage', {
            templateUrl: 'js/app/home/homePage.html',
            bindings: {
               newsItem: '<'
           },
            controller: cropCtrl
        });
})();
