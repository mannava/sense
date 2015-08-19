(function() {
    'use strict';

    angular
        .module('triAngularGithub')
        .controller('GithubController', GithubController);

    /* @ngInject */
    function GithubController($http, $mdToast, LoaderService) {
        var oxygennaAPIUrl = 'http://api.invensense.com';
        var vm = this;
        vm.data = {
            id: '11711437',
            purchaseCode: '',
            githubUser: '',
        };
        vm.register = register;
        vm.userSearch = userSearch;

        clearForm();

        ////////////////

        function register() {
            LoaderService.setLoaderActive(true);

            $http.put(oxygennaAPIUrl + '/register-github-access', vm.data).
            then(function() {
                // everything went ok
                LoaderService.setLoaderActive(false);
                popAToast('Success!  Check your GitHub email for your invite.');
            }, function(response) {
                // something went wrong
                LoaderService.setLoaderActive(false);
                if(response.data.error !== undefined) {
                    popAToast(response.data.error);
                }
            });
        }

        function userSearch (query) {
            return $http.get('https://api.github.com/search/users?q=' + query + '+type:user+in:login').
            then(function(response) {
                // get the items
                return response.data.items;
            });
        }

        function clearForm() {
            vm.data.purchaseCode = '';
            vm.data.githubUser = '';
        }

        function popAToast(message) {
            var toast = $mdToast.simple({
                hideDelay: false
            })
            .content(message)
            .action('OK')
            .highlightAction(false)
            .position('bottom right');

            return $mdToast.show(toast);
        }

    }
})();
