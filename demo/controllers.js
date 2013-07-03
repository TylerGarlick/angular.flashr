angular.module('App')
	.controllers('OneCtrl', 
		function($scope, flashr){
			$scope.flashNow = function(){
				flashr.now.success('Flashed it');
			};
		});
	.controllers('TwoCtrl', 
		function($scope, flashr){
			$scope.flashNow = function(){
				flashr.now.success('Flashed it');
			};
		});