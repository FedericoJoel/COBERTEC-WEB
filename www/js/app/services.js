angular.module('Cartilla.services', [])

.service('parserSrv', function(){
  
  var _long;
  var _lat;

    this.parseMarkers = function(array){
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
    
    this.setLatLongAvrg = function(obj){
      _long = (obj.reduce(function(a, b) {return a + parseFloat(b.longitude);}, 0) / obj.length).toString();
      _lat = (obj.reduce(function(a, b) {return a + parseFloat(b.latitude);}, 0) / obj.length).toString();
    }
    
    this.getLatitude = function(){
      return _lat;
    }
    
    this.getLongitude = function(){
      return _long;
    }
    
    

})


