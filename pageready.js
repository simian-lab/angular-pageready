/*
 * angular-pageready v1.0
 * 2013 Simian http://simian.co
 * License: MIT
 */

 angular.module('simian.pageReady', [])
  .directive('smnPageready', function factory($window) {
    return {
      restrict: 'A',
      link: function($scope, $element, $attrs) {
        $scope.moduleCount = 0;

        $scope.$on('pageModuleLoaded', function() {
          if(++$scope.moduleCount >= $attrs.smnPageready) {
            if($attrs.modifyBody)
              document.body.setAttribute('data-status', 'ready');

            $scope.$emit('pageReady');
            $scope.$broadcast('pageReady');
          }
        });
      }
    }
  })
  ;
