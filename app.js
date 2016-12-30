(function() {
'use strict';

    angular
        .module('app', [])
        .controller('homeController', homeController);

    homeController.inject = ['$log'];
    function homeController($log) {
        var vm = this;
        vm.title = "Working Ver Hard!!!"
        vm.clickCount = 0;

        vm.incrementClikCount = function () {
             vm.clickCount += 1;   
        };

        activate();

        ////////////////

        function activate() { }
    }
})();