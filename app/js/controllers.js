'use strict';

/* Controllers */

var contactListControllers = angular.module('contactListControllers', []);

contactListControllers.controller('ContactListCtrl', ['$scope', 'Contacts', function($scope, Contacts) {

  $scope.contacts = Contacts.query();
   $scope.orderProp = 'first';
}]);

  
contactListControllers.controller('ContactDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('contacts/' + $routeParams.contactId + '.json').success(function(data) {
      $scope.contact = data;
    });

	
// contactListControllers.controller('ContactDetailCtrl', ['$scope', '$routeParams', '$http',
  // function($scope, $routeParams, Contacts) {
     // $scope.contacts = Contacts.get({contactId: $routeParams.contactId}), (function(contacts)) {
		 // $scope.contact = data;
  // });
  
	 // $scope.doTheBack = function() {
	//	window.history.back();
//};
   // });
  }]);