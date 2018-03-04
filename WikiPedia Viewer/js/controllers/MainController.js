app.controller('MainController', ['$scope', 'result', function($scope, result) {
  result.success(function(data) {
    $scope.action = data;
  });
}]);
