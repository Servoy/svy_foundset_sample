angular.module('svyfoundsetsampleCodebox',['servoy']).directive('svyfoundsetsampleCodebox', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
    	  
    	  $scope.model.codeLines = [];
      },
      templateUrl: 'svyfoundsetsample/codebox/codebox.html'
    };
  })