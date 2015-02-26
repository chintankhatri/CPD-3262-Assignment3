'use strict';


var contactServices = angular.module('contactServices', ['ngResource']);

contactServices.factory('Contacts', ['$resource',
  function($resource){
    return $resource('http://ipro.lambton.on.ca/contacts/:contactId', {contactId:''}, {
      query: {method:'GET', params:{contactId:'contacts'}, isArray:true}
    });
  }]);