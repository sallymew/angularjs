// factory provider service
var app = angular.module('myApp', [])
	.value('myValue', 'Wlan')
	.factory('myFactory', function(myValue){
		return{
			label: function(){
				return 'this can output: hello ' + myValue;
			}
		}
	});
app.controller('myTest', function($scope, myValue, myFactory){
	$scope.yourName = 'hello ' + myValue;
	$scope.output = myFactory.label();
});