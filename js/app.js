
var App = angular.module('intro-angular', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                controller: 'HomeController',
                templateUrl:'../views/home/home.html'
            })
            .state('incrementer', {
                url: "/incrementer",
                controller:'IncrementerController',
                templateUrl:'../views/incrementer/incrementer.html'
            })
            .state('params', {
                url: "/params",
                controller:'ParamsController',
                templateUrl:'../views/params/params.html'
<<<<<<< Updated upstream
            });
    })

    .service('Settings', function () {
        this.values = {
            increment: 1,
            maxLimit: 200,
            minLimit: -200
        };
=======
            })
            .state('jeux', {
                url: "/jeux",
                controller:'JeuxController',
                templateUrl:'../views/Jeux/Jeux.html'
            })
    })
    .service('varPartage', function(){
        this.values = {
            increment:1,
            maxLimit:100,
            minLimit:-100,
            valDepart:0,
            topScore:0,
            nbUser:0
        }
>>>>>>> Stashed changes
    });

