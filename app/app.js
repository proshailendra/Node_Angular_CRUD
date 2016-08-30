angular
    .module("myApp", ["ui.router", "ngMessages"])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "views/user/index.html",
                controller: "userController"
            }).state("create", {
                url: "/create",
                templateUrl: "views/user/create.html",
                controller: "userController"
            }).state("edit", {
                url: "/edit/:id",
                templateUrl: "views/user/create.html",
                controller: "userController"
            });
    })
    .constant("globalConfig", {
        apiAddress: "http://localhost:3000/api"
    });