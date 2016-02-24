angular.module('warRoom')
  .controller('MainController', MainController)
  .controller('DetailController', DetailController)
  .controller('SettingsController', SettingsController)


function MainController($scope, DataService, LiveService, SettingsService){
  $scope.upper = SettingsService.upper;
  $scope.middle = SettingsService.middle;
  var socket = io()
  socket.on("info", function(data){
    $scope.servers = data.data
    //console.log(data.data);
    $scope.$apply()
  })
}

function DetailController($scope, LiveService, $stateParams, SettingsService){
  $scope.upper = SettingsService.upper;
  $scope.middle = SettingsService.middle;
  id = $stateParams.id
  var socket = io()
  socket.on("info", function(data){
    for (var i = 0; i < data.data.length; i++) {
      if(parseInt(data.data[i].id) ===parseInt(id)){
        $scope.details = data.data[i];
      }
    }
    $scope.$apply()
  })
}

function SettingsController($scope, SettingsService){
  $scope.enterSettings= function(){
    SettingsService.upper = $scope.upper*0.001;
    SettingsService.middle = $scope.middle*0.001;
    console.log(SettingsService.upper);
    console.log(SettingsService.middle);
  }
}
