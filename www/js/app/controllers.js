angular.module('Cartilla.controllers',['uiGmapgoogle-maps'])

	.controller('listadoCtrl', function($scope) {
		$scope.mensaje= 'Holiss';
	})

	.controller('mapaCtrl', function($scope) {
		$scope.mensaje = 'SOS UN PUTO DE MIERDA CHAU';
	})

	.controller('filtroCtrl', function($scope,$log) {
		$scope.mostrar =  function(){
        	alert($scope.fede);    
        }

        $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4, bounds: {}};
	})