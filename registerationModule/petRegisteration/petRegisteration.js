app.controller("petRegisterationController", ['$scope', '$filter', '$animate', function ($scope, $filter, $animate) {

    $scope.animalCategoryList = ['Dog', 'Cat'];
    $scope.selectedAnimalCategory = "";
    $scope.petName = "";
    $scope.petBreed = "";
    $scope.petGender = "";
    $scope.petColor = "";
    $scope.petAge = "";

    $scope.savePetDetails = function () {
        var petObj = {
            selectedAnimalCategory: $scope.selectedAnimalCategory
            , petname: $scope.petName
            , petbreed: $scope.petBreed
            , petgender: $scope.petGender
            , petcolor: $scope.petColor
            , petAge: $scope.petAge
        }
        console.log(petObj);
    };

    $scope.calculateAge = function () {
        var currDate = formatDate(new Date());
        var dateOfBirth = formatDate($scope.dt);
        var yearDiff = currDate.year - dateOfBirth.year;
        if (currDate.month < dateOfBirth.month || currDate.month == dateOfBirth.month) {
            if (currDate.day < dateOfBirth.day) {
                yearDiff--;
            }
        }
        $scope.petAge = yearDiff;
    }

    function formatDate(data) {
        var day = data.getDate();
        var monthIndex = data.getMonth() + 1;
        var year = data.getFullYear();
        var obj = {
            day: day
            , month: monthIndex
            , year: year
        }
        return obj;
    }

    $scope.today = function () {
        $scope.dt = new Date();
    };

    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass
        , minDate: new Date()
        , showWeeks: true
    };

    $scope.dateOptions = {
        formatYear: 'yyyy'
        , maxDate: new Date(2020, 5, 22)
        , minDate: new Date()
        , startingDay: 1
    };

    $scope.toggleMin = function () {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function (year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [{
        date: tomorrow
        , status: 'full'
    }, {
        date: afterTomorrow
        , status: 'partially'
    }];

    function getDayClass(data) {
        var date = data.date
            , mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }

}]);