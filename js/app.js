var app = angular.module('VerticeApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/", {
        templateUrl : "pages/home.html",
        controller : "dateController",
        controllerAs : "date"
    })
        .when("/Arquitectura", {
        templateUrl : "pages/Arquitectura.html"
    })
        .when("/Bioingenieria", {
        templateUrl : "pages/Bioingenieria.html"
    })
        .when("/Civil", {
        templateUrl : "pages/Civil.html"
    })
        .when("/Industrial", {
        templateUrl : "pages/Industrial.html"
    })
        .when("/Registro", {
        templateUrl : "pages/Registro.html",
        tab : "registro"
    })
        .when("/About", {
        templateUrl : "pages/About.html"
    });
}]);

app.controller('dateController', function() {
    //    var fecha = new Date();
    //    var fechaCongreso = new Date("April 26, 2017 00:13:00");
    //    var diferencia=(fechaCongreso-fecha)/1000
    //    this.dias=Math.floor(diferencia/86400)
    //    diferencia=diferencia-(86400*this.dias)
    //    this.horas=Math.floor(diferencia/3600)
    //    diferencia=diferencia-(3600*this.horas)
    //    this.minutos=Math.floor(diferencia/60)
    $('#countdown-timer').countdown('2017/4/26 10:30:00', function(event) {
        console.log("documento");
        $(this).html(event.strftime("<span class='timer-day'>%D<span>%!D:Day,Días;</span></span><span class='timer-hour'>%H<span>%!H:Hour,Horas;</span></span><span class='timer-minute'>%M<span>%!M:Minute,Minutos;</span></span><span class='timer-second'>%S<span>%!S:Second,Segundos;</span></span>"));
    });
});

app.controller('navController', function() {
});

app.controller('TabController', function() {
    this.tab = 1;
    this.isSet = function(checkTab) {
        return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
        this.tab = setTab;
        (window).scrollTo(0,0);
    };
});
