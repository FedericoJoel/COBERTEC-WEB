angular.module('Cartilla.services', [])

.service('parserSrv', function(){

    this.parseMarkers = function(array){
    	console.log("array");
    	console.log(array);
       	array.map(function(elem){
          elem.id =  elem.IDCLI;
          delete elem["0"]; 
          delete elem["1"];
          delete elem["2"];
          delete elem["3"];
          delete elem["4"];
          delete elem["5"];
          delete elem["6"]; 
        } );
       	console.log(array);
       	return array;
    }

});