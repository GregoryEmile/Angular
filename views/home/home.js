<<<<<<< Updated upstream
App.controller('HomeController', function ($scope) {
   
=======
App.controller('HomeController', function ($scope, varPartage) {
    $scope.valeur = "Bienvenue dans l'application d'incrémentation plus ou moins";
    $scope.topScore = varPartage.values.topScore;
>>>>>>> Stashed changes
});