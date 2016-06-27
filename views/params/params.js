<<<<<<< Updated upstream
/**
 * Created by hippias on 20/06/2016.
 */
App.controller('ParamsController', function($scope, Settings) {
    $scope.settings = angular.copy(Settings.values);

    $scope.save = function () {
      Settings.values = angular.copy($scope.settings);
    };
=======
App.controller('ParamsController', function($scope, varPartage)
{
    $scope.valDepart = varPartage.values.valDepart ;
    $scope.increment = varPartage.values.increment ;
    $scope.maxLimit = varPartage.values.maxLimit ;
    $scope.minLimit = varPartage.values.minLimit ;

    $scope.Sauvegarde = function()
    {
        varPartage.values.valDepart = $scope.valDepart;
        varPartage.values.increment = $scope.increment;
        varPartage.values.minLimit = $scope.minLimit;
        varPartage.values.maxLimit = $scope.maxLimit;
    }
>>>>>>> Stashed changes
});