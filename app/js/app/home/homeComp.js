(function () {
    function cropCtrl(addNewService, scrollGoBottomService, $timeout) {
        var ctrl = this;
        ctrl.addNewService = addNewService;
        ctrl.news = [];
        ctrl.comments = null;
        ctrl.index = null;
        ctrl.scrollGoBottomService = scrollGoBottomService;

        ctrl.$onInit = function() {
            if(ctrl.newsItem){
                ctrl.news = ctrl.newsItem;
            }
          };

        ctrl.deleteNew = function (index){
          ctrl.news.splice(index, 1);
          ctrl.addNewService.addNew(ctrl.news);
          debugger;
          if(ctrl.index === index){
              ctrl.index = null;
              ctrl.comments = null;
          }

        };
        ctrl.addNew = function(){
          var post = {
              text: ctrl.newItem,
              comments: []
          };
          ctrl.news.push(post);
          ctrl.addNewService.addNew(ctrl.news);
          ctrl.newItem = "";
        };
        ctrl.addComment = function(){
            if(ctrl.messegeItem){
                ctrl.news[ctrl.index].comments.push(ctrl.messegeItem);
            }
          ctrl.addNewService.addNew(ctrl.news);
          ctrl.messegeItem = "";
            $timeout(function(){
                ctrl.scrollGoBottomService.scrollBottom()
            },100);
        };
        ctrl.setIndex = function (index) {
            debugger;
            ctrl.index = index;
            ctrl.comments = ctrl.news[ctrl.index].comments;

        }
    }

    cropCtrl.$inject = ['addNewService', 'scrollGoBottomService', '$timeout'];

    angular.module('empeek')
        .component('homePage', {
            templateUrl: 'js/app/home/homePage.html',
            bindings: {
               newsItem: '<'
           },
            controller: cropCtrl
        });
})();
