angular.module('Cartilla.controllers',[])

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
	})