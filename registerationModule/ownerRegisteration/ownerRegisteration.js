app.controller("ownerRegisterationController", ['$scope', function ($scope) {

    $scope.titleList = ['Mr.', 'Mrs.'];
    $scope.selectedTitle = "";
    $scope.ownerName = "";
    $scope.ownerAddress = "";
    $scope.ownerPincode = "";
    $scope.ownerMobileNumber = "";
    $scope.ownerAlternateContactNumber = "";

    $scope.saveOwnerDetails = function () {
        var ownerObj = {
            name: $scope.ownerName
            , address: $scope.ownerAddress
            , pincode: $scope.ownerPincode
            , mobileNo: $scope.ownerMobileNumber
            , aleternateNo: $scope.ownerAlternateContactNumber
        }
        console.log(ownerObj);
    };

}]);