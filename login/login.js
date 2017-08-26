app.controller("loginController", ['$scope', '$state', function ($scope, $state) {
    $scope.userName = "";
    $scope.passWord = "";

    $scope.loginClick = function () {
        if ($scope.passWord === "admin" && $scope.userName === "admin") {
            $state.go('registerationModule');
        }
    };
}]);