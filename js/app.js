var app = angular.module('myApp', ['ngRoute', 'firebase']);

app.config(function($locationProvider, $routeProvider){
	$locationProvider.hashPrefix('');
  	$routeProvider
	.when('/', {
		controller: 'ListController',
		templateUrl: 'views/list.html'
	})
	.when('/add', {
		controller: 'AddController',
		templateUrl: 'views/add.html'
	})
	.when('/edit/:id', {
		controller: 'EditController',
		templateUrl: 'views/edit.html'
	})
	.otherwise({
		redirectTo: '/'
	});
    
});

var config = {
    apiKey: "AIzaSyBQhon8BJtroRG6muK9s_XKLejHM2dYzMw",
    authDomain: "peditaxiv1db.firebaseapp.com",
    databaseURL: "https://peditaxiv1db.firebaseio.com",
    projectId: "peditaxiv1db",
    storageBucket: "peditaxiv1db.appspot.com",
    messagingSenderId: "223896605016"
  };
  firebase.initializeApp(config);