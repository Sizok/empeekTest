(function () {
    angular.module('crop.home', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                template: '<home-page images="$resolve.image"></home-page>',
                data: {
                    pageTitle: 'Home'
                },
                resolve: {
                   image: ['getImageService', function (getImageService) {
                       var images = getImageService.getImage();
                       return images;
                   }]}
            });
        }])

})();
