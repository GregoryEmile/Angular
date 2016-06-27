<<<<<<< Updated upstream
App.controller('IncrementerController', function($scope, Settings, $state) {
    $scope.value = $state.value || 1;

    $scope.history = $state.history || [];

    $scope.increment = function () {
        $scope.value += Settings.values.increment;
        $scope.history.push({ timestamp: Date.now(), value: $scope.value });
        this.saveState();
    };

    $scope.decrement = function () {
        $scope.value -= Settings.values.increment;
        $scope.history.push({ timestamp: Date.now(), value: $scope.value });
        $scope.saveState();
    };

    $scope.saveState = function () {
        $state.value = $scope.value;
        $state.history = angular.copy($scope.history);
    }
});
=======
App.controller('IncrementerController', function($scope, varPartage)
{
    $scope.Val_Init=varPartage.values.valDepart;
    $scope.history = ($scope.history) ? $scope.history : [];


    $scope.MoinsMoins = function()
    {
        $scope.valTemp = $scope.Val_Init;
        $scope.Val_Init = $scope.Val_Init - varPartage.values.increment;
        if($scope.Val_Init < varPartage.values.minLimit)
        {
            $scope.Val_Init = $scope.valTemp;
        }
        $scope.history.push({timestamp: Date.now(), value: $scope.Val_Init});

        if($scope.Val_Init <= varPartage.values.topScore)
        {
            varPartage.values.topScore = $scope.Val_Init;
        }
    };

    $scope.PlusPlus = function()
    {
        $scope.valTemp = $scope.Val_Init;
        $scope.Val_Init = $scope.Val_Init + varPartage.values.increment;
        if($scope.Val_Init > varPartage.values.maxLimit)
        {
            $scope.Val_Init = $scope.valTemp;
        }
        $scope.history.push({timestamp: Date.now(), value: $scope.Val_Init});

        if($scope.Val_Init >= varPartage.values.topScore)
        {
            varPartage.values.topScore = $scope.Val_Init;
        }
    };

    function SaveState()
    {
        $state.value = $scope.value;
        $state.history = angular.copy($scope.history);
    };
});
>>>>>>> Stashed changes
