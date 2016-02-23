angular.module('warRoom')
  .controller('MainController', MainController)
  .controller('DetailController', DetailController)

function MainController($scope, DataService, LiveService){
  var socket = io()
  socket.on("info", function(data){
    $scope.servers = data.data
    //console.log(data.data);
    $scope.$apply()
  })
}

function DetailController($scope, LiveService, $stateParams){
  id = $stateParams.id
  var socket = io()
  socket.on("info", function(data){
    for (var i = 0; i < data.data.length; i++) {
      if(parseInt(data.data[i].id) ===parseInt(id)){
        $scope.details = data.data;
      }
    }
    $scope.$apply()
  })
}
