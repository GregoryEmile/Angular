App.controller('JeuxController', function($scope, varPartage)
{
    $scope.nbUser = varPartage.values.nbUser;
    $scope.nbAleat = Math.floor((Math.random() * 100) + 1);

    $scope.Moins = function(){
        $scope.nbTemp = $scope.nbUser;
        $scope.nbUser--;
        if($scope.nbUser < 1)
        {
            alert('Vous dépassez la limite !');
            $scope.nbUser = $scope.nbTemp;
        }
        Reponse();
        varPartage.values.topScore++;
    };

    $scope.Plus = function(){
        $scope.nbTemp = $scope.nbUser;
        $scope.nbUser++;
        if($scope.nbUser > 100)
        {
            alert('Vous dépassez la limite !');
            $scope.nbUser = $scope.nbTemp;
        }
        Reponse();
        varPartage.values.topScore++;
    };

    function Reponse()
    {
        if($scope.nbUser < $scope.nbAleat)
        {
            alert('plus');
        }
        else
        {
            if($scope.nbUser > $scope.nbAleat)
            {
                alert('moins');
            }
            else
            {
                 if($scope.nbUser = $scope.nbAleat)
                 {
                   alert('Tu as trouvé la bonne réponse ;)');
                 }
            }
        }
    }
});