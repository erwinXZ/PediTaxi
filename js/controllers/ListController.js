app.controller('ListController', ['$scope', '$firebaseArray', '$firebaseObject',function($scope, $firebaseArray, $firebaseObject){
  
  const rootRef = firebase.database().ref();
  const values = rootRef.child('taxis');
  $scope.values = $firebaseArray(values);

  $scope.removeTaxi = function(id) {
    var ref = values.child(id);
    var value = $firebaseObject(ref);
    value.$remove();
   };

}]);

 