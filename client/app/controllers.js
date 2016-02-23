angular.module('warRoom')
  .controller('MainController', MainController)
  .controller('DetailController', DetailController)

function MainController($scope, DataService, LiveService){

  // DataService.getServers().then(function(data){
  //   $scope.servers = data.data
  // })
  var socket = io()
  socket.on("info", function(data){
    $scope.servers = data.data
    console.log(data.data);
    $scope.$apply()
  })
  // LiveService.on(function(data){
  //   console.log(data);
  // })
}

function DetailController($scope, LiveService){

}
