angular.module('Farmacias.services', [])

.service('parserSrv', function(){

  var latCABA=-34.5991567;
  var longCABA = -58.369587499999966 ;
  var _lat;
  var _long;
  var _zoom
  var clinicas;

  this.parseMarkers = function(array){
      array.map(function(elem){
        console.log("entro, el ID ES " + elem.ID);
        elem.id =  elem.ID;
        //delete elem["0"];
        //delete elem["1"];
        //delete elem["2"];
        //delete elem["3"];
        //delete elem["4"];
        //delete elem["5"];
        //delete elem["6"];
      } );
      console.log(array);
      return array;
  }

    this.setLatLongAvrg = function(obj){
        _long = (obj.reduce(function(a, b) {return a + parseFloat(b.longitude);}, 0) / obj.length).toString();
        _lat = (obj.reduce(function(a, b) {return a + parseFloat(b.latitude);}, 0) / obj.length).toString();
    }

    this.getLatitude = function(){
      if (isNaN(_lat)){
         return latCABA
      }
      else
       return _lat
    }

    this.getLongitude = function(){
      if(isNaN(_long)){
        return longCABA
      }
      else{
        return _long
      }
    }

    this.setClinicas = function(obj){
        clinicas = obj;
    }

    this.getClinicas= function(obj){
      return clinicas;
    }


})
