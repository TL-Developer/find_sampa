angular.module('find-sampa')
  .controller('CreateController',
      ['$scope','services',
        function($scope, services){

  $scope.galeria = [];
  (function(){
    $scope.addGaleria = function(item){
      $scope.galeria.push(item.imageBase64);
    };

    $scope.removeGaleria = function(item) {
      var index = $scope.galeria.indexOf(item);
      $scope.galeria.splice(index, 1);
    };
  })();


  $scope.phones = [
    {
      phone: [],
      cel: []
    }
  ];

  (function(){
    $scope.addTelefone = function(tel, type){

      if(type === 'tel') {
        $scope.phones[0].phone.push(tel);
      }else {
        $scope.phones[0].cel.push(tel);
      }
      console.log($scope.phones[0])
    };

    $scope.removeTelefone = function(tel, type){

      if(type === 'tel'){
        var index = $scope.phones[0].phone.indexOf(tel);
        $scope.phones[0].phone.splice(index, 1);
      }else {
        var index = $scope.phones[0].cel.indexOf(tel);
        $scope.phones[0].cel.splice(index, 1);
      }

    };
  })();

  $scope.horarios = [];
  (function(){

    $scope.addHorario = function(horario){
      if($scope.horarios.indexOf(horario) == -1){
        $scope.horarios.push(horario);
      }else {
        alert('Já existe')
      }
    };

    $scope.removeHorario = function(horario){
      var index = $scope.horarios.indexOf(horario);
      $scope.horarios.splice(index, 1);
    };

  })();

  $scope.metatags = [];
  (function(){
    $scope.addMetatags = function(metatag) {
      if($scope.metatags.indexOf(metatag) == -1) {
        $scope.metatags.push(metatag);
      }else {
        alert('já existe');
      }
    };

    $scope.removeMetatags = function(metatag) {
      var index = $scope.metatags.indexOf(metatag);
      $scope.metatags.splice(index, 1);
    };
  })();


  $scope.createAdvertiser = function(data) {
    console.log(data.galeria);
    console.log(data);
  };


}]);
