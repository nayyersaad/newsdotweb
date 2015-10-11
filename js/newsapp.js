(function(){
	var app = angular.module('main',[]);

	app.controller('newscontroller',['$scope', '$http', function($scope,$http) {
		$http.get('data/data.json').success(function(dataRetrieved){
			$scope.data = dataRetrieved;
		});
	}]);

})();