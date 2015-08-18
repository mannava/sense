(function() {
    'use strict';

    angular
        .module('triAngularGithub')
        .run(run);

    /* @ngInject */
    function run(SideMenu) {
        SideMenu.addMenu({
            name: 'MENU.GITHUB.GITHUB',
            state: 'admin-panel.default.github',
            type: 'link',
            icon: 'fa fa-github',
            priority: 1.1
        });
        SideMenu.addMenu({
            type: 'divider',
            priority: 1.2
        });
    }
})();