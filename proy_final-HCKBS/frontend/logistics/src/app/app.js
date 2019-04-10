angular
  .module("myApp", ["satellizer", "ui.router"])
  .config(function ($authProvider, $stateProvider) {
    // Parametros de configuración
    $authProvider.loginUrl = "http://api.com/auth/login";
    $authProvider.signupUrl = "http://api.com/auth/signup";
    $authProvider.tokenName = "token";
    $authProvider.tokenPrefix = "myApp",

      // Configuración de las rutas/estados
      $stateProvider
        .state("home", {
          url: "/",
          templateUrl: "views/index.html",
          controller: "HomeController"
        })
        .state("login", {
          url: "/login",
          templateUrl: "views/login.html",
          controller: "LoginController",
          controllerAs: "login"
        })
        .state("signup", {
          url: "/signup",
          templateUrl: "views/signup.html",
          controller: "SignUpController",
          controllerAs: "signup"
        })
        .state("logout", {
          url: "/logout",
          templateUrl: null,
          controller: "LogoutController"
        })
        .state("private", {
          url: "/private",
          templateUrl: "views/private.html",
          controller: "PrivateController",
          controllerAs: "private"
        });
  });