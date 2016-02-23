angular.module('warRoom')
  .factory('DataService', DataService)
  .factory('LiveService', LiveService)

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

  // var socket = io()
  // console.log(socket);
  // socket.on('data', function(data){
  //   console.log(data);
  // })
