(function() {
    'use strict';

    angular
        .module('triAngularGithub')
        .config(config);

    /* @ngInject */
    function config($translatePartialLoaderProvider, $stateProvider) {
        $translatePartialLoaderProvider.addPart('app/github');

        $stateProvider
        .state('admin-panel.default.github', {
            url: '/github',
            templateUrl: 'app/github/github.tmpl.html',
            controller: 'GithubController',
            controllerAs: 'vm'
        });
    }
})();