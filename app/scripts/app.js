'use strict';

angular.module('ToDo', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'todoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
