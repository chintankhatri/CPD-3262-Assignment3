
'use strict';
var contactListFilter = angular.module('contactListFilter', []);


var email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

contactListFilter.filter('sanitize', function() {
    return function(input) {
        var output = "";
        if (email.test(input))
            output = input.replace(/@/g, '-AT-').replace(/\./g, '-DOT-');
        else
            output = input;
        return output;
    };
});



/* angular.module('contactFilters', []).filter('sanitize', function() {
  return function(input) {
    if (input.match(email))
            return input.replace(/@/, '-AT-').replace(/\./, '-DOT-');
		                          
        else
            return input;
  };
}); */