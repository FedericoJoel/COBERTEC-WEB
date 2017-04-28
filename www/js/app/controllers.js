angular.module('Cartilla.controllers',['uiGmapgoogle-maps','Cartilla.services'])

	.controller('listadoCtrl', function($scope) {
		$scope.mensaje= 'Holiss';
	})

	.controller('mapaCtrl', function($scope,parserSrv,$http) {
		
	localidad = 'CAPITAL FEDERAL';
    	especialidad = 'Clinico';
        $http.post( "http://www.gestionarturnos.com/Fede/listarClinicas.php", {'localidad':localidad,'especialidad':especialidad})
        .success(function(response) {
            console.log("resp");
            console.log(response);
            var parseado = parserSrv.parseMarkers(response);
            $scope.markers=parseado;
    })
		$scope.map = {center: {latitude: -34.5991567, longitude: -58.369587499999966 }, zoom: 12, bounds: {}};
	
	
	})

	.controller('filtroCtrl', function($scope,$log) {
		$scope.mostrar =  function(){
        	alert($scope.fede);    
        }
	})