'use strict';

/* App Module */
var contactListApp = angular.module('contactListApp', [
  'ngRoute',
  'contactAnimations',
  'contactListControllers',
  'contactListFilter',
  'contactServices'
]);

contactListApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/contacts', {
        templateUrl: 'partials/contact-list.html',
        controller: 'ContactListCtrl'
      }).
      when('/contacts/:contactId', {
        templateUrl: 'partials/contact-detail.html',
        controller: 'ContactDetailCtrl'
      }).
      otherwise({
        redirectTo: '/contacts'
      });
  }]);
  

 