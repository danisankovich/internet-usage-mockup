'use strict';

angular.module('sif', ['firebase', 'ui.router'])
// .constant("ATN", {
//   "API_URL": "http://localhost:3000"
// });
// sif.config(function($stateProvider, $urlRouterProvider) {
//   $urlRouterProvider.otherwise('/');
//   $stateProvider
//   .state('home', {
//     url: '/',
//     templateUrl: 'home.jade',
//     controller: 'MainCtrl'
//   })
//   .state('one', {
//     url: '/one',
//     templateUrl: 'one.html',
//     controller: 'MainCtrl'
//   })
//   .state('two', {
//     url: '/two',
//     templateUrl: 'two.jade',
//     controller: 'MainCtrl'
//   })
//   .state('404', {
//     url: '/404',
//     templateUrl: '404.html'
//   });
// })
// .factory('Factory', function($http, ATN) {
//   return {
//     goOne: function() {
//       return $http.get(ATN.API_URL + "/one");
//     },
//     getOne: function(slug) {
//       return $http.get(ATN.API_URL + "/two");
//     },
//   };
// });
