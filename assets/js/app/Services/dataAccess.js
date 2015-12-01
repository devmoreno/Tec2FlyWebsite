(function() {
'use strict';

	angular
		.module('TEC2WEB')
		.service('datalayer', Service);

	Service.$inject = ['$q', '$http'];
	function Service($q, $http) {
			//Public Exposed Methods
			
			this.sendRequest = sendRequest;
			
			
			////////////////
			//Private Class Methods
			function sendRequest(params) {
				var defer = $q.defer();
				var option = {};
				$http.post('/main/tec2send',params).then(function(result){
					defer.resolve(result.data)
				},
				function(error){
					console.log(error);
					defer.reject(error);
				})
				return defer.promise;
			}
		
		}
})();