var app = angular.module('BailamosApp', ['ui.router','BailamosApp.controllers']);

    app.config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('hola', {
                url: "/hola",
                templateUrl: "templates/hola.html",
                controller:"holaCrt"
            })
            .state('chau', {
                url: "/chau",
                templateUrl: "templates/chau.html",
                controller:"chauCrt"
            })

            $urlRouterProvider.otherwise("/hola");

    });
