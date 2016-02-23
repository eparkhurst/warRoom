angular.module('warRoom')
  .controller('MainController', MainController)
  .controller('DetailController', DetailController)

function MainController($scope, DataService, LiveService){
  DataService.getServers().then(function(blah){
    $scope.servers = blah.data
  })
  LiveService.on().then(function(data){
    console.log(data);
  })
}

function DetailController($scope, LiveService){

}
