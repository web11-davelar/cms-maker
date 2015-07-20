var app = angular.module('app', []);

app.directive('module', function () {
	return {
		restrict: 'E',
		templateUrl: 'templates/module.html'
	};
});