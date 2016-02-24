angular.module('warRoom')
  .factory('DataService', DataService)
  .factory('LiveService', LiveService)
  .factory('SettingsService', SettingsService)

function DataService($http){
  return{
    getServers:function(){
      return $http.get('/servers').then(function(data){
        return data
      })
    }
  }
}
function LiveService($stateParams){
  return{
    id: $stateParams.id
  }
}
function SettingsService(){
  return{
    upper:0.5,
    middle:0.05
  }
}

  // var socket = io()
  // console.log(socket);
  // socket.on('data', function(data){
  //   console.log(data);
  // })
