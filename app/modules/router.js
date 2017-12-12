function config($stateProvider, $httpProvider, $urlRouterProvider) {

    // ESTUDAR ESSES PROVIDERS
    $httpProvider.defaults.useXDomain = true;
    // $httpProvider.defaults.withCredentials =  false;
    // $httpProvider.defaults.crossDomain = false,
    $httpProvider.defaults.headers.common = { Accept: "application/json, text/plain, */**" };
    $httpProvider.defaults.headers.post = { "Content-Type": "application/json;charset=utf-8" };
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];


    $urlRouterProvider.otherwise('notrouble');

    $stateProvider
        .state('main', {
            url: '/',
            abstract: true,
            controller: 'MainCtrl as vm',
            templateUrl: 'modules/commons/views/main.html'
        })
        .state('main.notrouble', {
            url: 'notrouble',
            controller: 'NotroubleCtrl as vm',
            templateUrl: 'modules/todo/views/notrouble.html'
        })

        .state('main.cadastrar', {
            url: 'notrouble',
            controller: 'CadastrarCtrl as vm',
            templateUrl: 'modules/todo/views/cadastrar.html'
        })


        .state('main.about', {
            url: 'about',
            controller: 'AboutCtrl as vm',
            templateUrl: 'modules/todo/views/about.html'
        })

        .state('main.toyou', {
            url: 'toyou',
            controller: 'ToyouCrtl as vm',
            templateUrl: 'modules/todo/views/toyou.html'
        })

        .state('main.app', {
            url: 'app',
            controller: 'AppCtrl as vm',
            templateUrl: 'modules/todo/views/app.html'
        })
       
        .state('main.login', {
            url: 'login',
            controller: 'LoginCtrl as vm',
            templateUrl: 'modules/todo/views/login.html'
            
        })

        .state('main.faq', {
            url: 'faq',
            controller: 'FaqCtrl as vm',
            templateUrl: 'modules/todo/views/faq.html'
        });
}
angular.module('todoApp').config(config);