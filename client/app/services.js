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
  var socket = io()
  return{
    num:5,
    on:function(){
      return socket.on('info').then(function(data){
        return data
      })
        //socket.emit('getShit', {formFront:"This is from the front"})
    }
  }
}

  // var socket = io()
  // console.log(socket);
  // socket.on('data', function(data){
  //   console.log(data);
  // })
