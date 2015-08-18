(function() {
    'use strict';

    angular
        .module('triAngularForms')
        .controller('FormWizardController', FormWizardController);

    /* @ngInject */
    function FormWizardController($scope) {
        var vm = this;
        vm.data = {}
    }
})();