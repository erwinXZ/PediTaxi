app.controller('AddController', ['$scope', '$firebaseArray', '$location', function($scope, $firebaseArray, $location){
	
	$scope.addTaxi = function() {

		const rootRef = firebase.database().ref();
		const value = $firebaseArray(rootRef);
		const ref = rootRef.child('taxis');
		const values = $firebaseArray(ref);

		// $scope.values = $firebaseArray(values);

		values.$add({
			brand: $scope.value.brand,
            color: $scope.value.color,
            plate: $scope.value.plate,
            name: $scope.value.name,
            surname: $scope.value.surname,
			latitude: $scope.value.latitude,
			longitude: $scope.value.longitude,
			ci: $scope.value.ci
		});
		$location.path('/');
	}

	
}]);


