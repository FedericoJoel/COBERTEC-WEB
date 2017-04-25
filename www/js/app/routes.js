var app = angular.module('Cartilla', ['ui.router','Cartilla.controllers']);

app.config(function($stateProvider, $urlRouterProvider) {


	$stateProvider
		.state('listado', {
			url: "/listado",
			templateUrl: "templates/listado.html",
			controller: "listadoCtrl"
		})

		.state('mapa', {
			url: "/mapa",
			templateUrl: "templates/mapa.html",
			controller: "mapaCtrl"
		})

	$urlRouterProvider.otherwise("/listado");

	});