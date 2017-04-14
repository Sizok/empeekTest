(function () {

    function hideShowMenu(){
        return {
            restric: 'A',
            link: function (scope, elem, attrs) {
                var menuButton = elem[0].children[0];
                var dropMenu = elem[0].children[1];
                $(menuButton).click(function(){
                  if($(dropMenu).hasClass('display-block')){
                    $(dropMenu).removeClass('display-block');
                  }else{
                    $(dropMenu).addClass('display-block');
                  }

                });
                $(dropMenu).click(function(){
                    $(dropMenu).removeClass('display-block');

                });
            }
        }
    }



    hideShowMenu.$inject = [];

    angular.module("crop")
        .directive("hideShowMenu", hideShowMenu)
})();
