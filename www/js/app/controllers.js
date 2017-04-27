angular.module('Cartilla.controllers',['uiGmapgoogle-maps'])

	.controller('listadoCtrl', function($scope) {
		$scope.mensaje= 'Holiss';
	})

	.controller('mapaCtrl', function($scope) {
		
		$scope.map = {center: {latitude: -34.5991567, longitude: -58.369587499999966 }, zoom: 12, bounds: {}};
		$scope.mensaje = 'SOS UN PUTO DE MIERDA CHAU';
	
	
	})

	.controller('filtroCtrl', function($scope,$log) {
		$scope.mostrar =  function(){
        	alert($scope.fede);    
        }
	})