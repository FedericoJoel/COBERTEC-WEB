angular.module('BailamosApp.controllers', [])

  .controller('holaCrt', function($scope, $http) {

    $scope.listar = function() {
      localidad = 'CAPITAL FEDERAL';
      especialidad = 'Clinico';
      $http.post("http://www.gestionarturnos.com/Fede/listarClinicasAll.php", {
          'localidad': localidad,
          'especialidad': especialidad
        })

        .success(function(response) {
          $scope.clinicas = response;
          //var resultado = Parsito.ParsearArray(response);
          //console.log(resultado);
        })
    }
  })

  .controller('chauCrt', function($scope) {
		var msg = "Este es mi mensaje"
    $scope.mensaje = msg;

		$scope.calcular = function() {
			var n1 = $scope.n1;
			var n2 = $scope.n2;
			var resultado = n1+n2;
			$scope.resultado = resultado;
			console.log(n1);
		}


  })
