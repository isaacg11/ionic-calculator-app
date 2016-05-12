angular.module('app.controllers', [])
  
.controller('calculatorCtrl', function($scope, $ionicPopup) {
	$scope.result = '';
	$scope.btnClicked = function(btn){ 
		if (btn == 'C'){ 
			$scope.result = ''; 
		}
		else if (btn == '='){
	    	try {
        		$scope.result = eval($scope.result);
      		}
      		catch(err){
      			$ionicPopup.alert({ 
      				title: 'Malformed input', 
      				template: "Ooops, please try again..." 
      			});
        		$scope.result = "";
	     	}
	     }
	     else{
            $scope.result += btn;   
        } 
    };

});
 