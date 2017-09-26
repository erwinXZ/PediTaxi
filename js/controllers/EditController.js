app.controller('EditController', ['$scope','$location', '$routeParams', '$firebaseArray', '$firebaseObject',
    function($scope, $location, $routeParams, $firebaseArray, $firebaseObject){
    
    // var ref = new Firebase(FBURLN + $routeParams.id);
    // $scope.value = $firebaseObject(ref);

    const rootRef = firebase.database().ref();
    const ref = rootRef.child('taxis');
    const refChild = ref.child($routeParams.id);
    $scope.value = $firebaseObject(refChild);

    $scope.editTaxi = function() {
        $scope.value.$save({
            brand: $scope.value.brand,
            color: $scope.value.color,
            plate: $scope.value.plate,
            name: $scope.value.name,
            surname: $scope.value.surname,
            ci: $scope.value.ci
        });
        $scope.edit_form.$setPristine();
        $scope.value = {};
        $location.path('/');
    };
     
}]);