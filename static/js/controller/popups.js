(function () {

    var Popups = angular.module("popupsControllers", [
        'ngAnimate'
    ]);

    Popups.controller("createGameController",function($scope,$location,$http) {

        /*
            Form submit!
        */
        $scope.formData = {};
        $scope.submit = function(popup) {
            $http.post('/creategame', {
                formData: $scope.formData
            }).success(function (data, status, headers, config) {
                console.log(data);
                if (data.errCode == 1) {
                    popup.changeState(false);
                    $location.path("game");
                }
                else {
                    //$scope.showFlash(data.errorMessage);
                }
            });
        }

        $scope.cleanUp = function() {
            $scope.formData = {};
            $scope.creategame.$setPristine();
        }


    });

})();
