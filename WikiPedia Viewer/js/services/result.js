app.factory('result', ['$http', function($http){
	return $http.get('https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json')
		.success(function(data){
				return data;
		})
		.error(function(err){
			return err;
		});
}]);