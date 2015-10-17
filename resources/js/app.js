'use strict';

var spinnerBankAngularApp = angular.module('spinnerBankAngularApp', [
    'ngRoute',
    'productos.controller',
    'productos.services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../../pages/Principal.html',
        controller: 'prodControler'
      })
      .otherwise({
        redirectTo: '/'
      });
  });