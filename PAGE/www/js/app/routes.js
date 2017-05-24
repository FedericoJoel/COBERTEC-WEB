var app = angular.module('Cartilla', ['ui.router','Cartilla.controllers','uiGmapgoogle-maps','ngTable']);

app.config(function($stateProvider, $urlRouterProvider) {


	$stateProvider
		.state('listado', {
			url: "/listado",
			templateUrl: "templates/listado.html",
			controller: "mainCtrl"
		})

		.state('mapa', {
			url: "/mapa",
			templateUrl: "templates/mapa.html",
			controller: "mainCtrl"
		})

	$urlRouterProvider.otherwise("/listado");

	});