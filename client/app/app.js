angular.module('warRoom',['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  console.log("Hello from Angular")
  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home', {
    templateUrl: 'partials/home.html',
    controller: 'MainController',
    url: '/home'
  }).state('detail', {
    templateUrl: 'partials/detail.html',
    controller: 'DetailController',
    url: '/home/:id'
  }).state('settings', {
    templateUrl: 'partials/settings.html',
    controller: 'SettingsController',
    url: '/settings'
  })
});
