(function() {
'use strict';

	angular
		.module('TEC2WEB')
		.controller('indexController', ControllerController);

	ControllerController.$inject = ['$scope', 'datalayer'];
	function ControllerController($scope, datalayer) {
		var ctrl = this;
		
		////////////////////
		/**
		 * Public Functions
		 * */
		$scope.sendRequest = function () {
			//construct the json object
			var data = {
				"FirstName": $scope.FirstName,
				"LastName":$scope.LastName,
				"Email":$scope.Email,
			}
			console.log("Data is being sent...");
			datalayer.sendRequest(data).then(function(data){
				console.log(data);
				alert(data.message);
				clearfield();
			})
		}

		////////////////
		/**
		 * Local Functions
		 * */
		 function clearfield(){
			$scope.FirstName = "";
			$scope.LastName = "";
			$scope.Email = ""; 
		 };
		 
		 // ...Here
		 
	}
})();