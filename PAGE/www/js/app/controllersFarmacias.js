angular.module('Farmacias.controllers',['uiGmapgoogle-maps','Farmacias.services','ngTable'])

	.controller('mainCtrl', function($scope,parserSrv,$http,$filter,NgTableParams,$state) {

		$scope.clinicas =null;

		$scope.getClinicas = function(){
				localidad = 'CAPITAL FEDERAL';
				especialidad = 'Clinico';

				$http.post( "http://www.gestionarturnos.com/Fede/cartilla.php", {'tabla':'Farmacias'})
				.success(function(response) {
					var parseado;

					console.log(response);
					if (response===""){ //VERIFICAMOS QUE EXISTAN CLINICAS PARA PARSEAR
						parseado=[];
					}
					else
					{
						parseado = parserSrv.parseMarkers(response);
					}

          $scope.clinicas=parseado;
					console.log("clinicas");
					console.log($scope.clinicas);

				//PARAMETROS DE LA TABLA FILTRO Y SORTING
					$scope.usersTable = new NgTableParams({
          	page: 1,
            count: 10
          },
					{
            total: $scope.clinicas.length,
            getData: function (params) {
							$scope.data = params.sorting() ? $filter('orderBy')($scope.clinicas, params.orderBy()) : $scope.clinicas;
   						$scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
							parserSrv.setClinicas($scope.data);
							parserSrv.setLatLongAvrg($scope.data);
   						$scope.data = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
              return $scope.data;
          	}
  				});
				})

				.error(function(response) {
					alert("Hubo un error al conectarse, revise su conexion a internet, de otra forma intente luego");
				})
		}

		$scope.getClinicas();

		$scope.mostrarMapa=function(){
			console.log(parserSrv.getLatitude());
			console.log(parserSrv.getLongitude());
			$scope.map = {center: {latitude: parserSrv.getLatitude(), longitude: parserSrv.getLongitude() }, zoom: 11, bounds: {}};
			$scope.markers = parserSrv.getClinicas();
			$state.go('mapa');
		}

	})
