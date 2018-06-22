var app = angular.module("myapp", ["ngRoute", "mm.acl", "ngCookies", "ui.bootstrap", "bw.paging"]);





String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
(function () {

    app.constant('SETTINGS', (function () {
        return {
            layoutPath: "views/layouts/",
            basePath: "views/layouts/",
            //apiBasePath: "http://api.juno.clinic"
            apiBasePath: "http://services.juno.clinic",
            appId: "4dc2409d737ead4702047ba597c12ea0"

        }
    })());

    app.constant('CONSTANTS', {


        }
    );

    app.service('app', function (AclService) {
        var that = this;
        this.title = null;
        this.setTitle = function (title) {
            this.title = title;
            $("#app-title").text(title);
        };
        this.user = null;

        this.setIdentity = function (user) {
            this.user = user;
        }
        this.getIdentity = function () {
            return this.user;
        }
        this.getUserId = function () {
            return this.user.employeeId;
        }
        this.getAuthToken = function () {
            return (this.user !== null ? this.user.authToken : '');
        }


    });




    app.service('api', function ($http, SETTINGS, app) {


        this.login = function (request) {
            var headers={
                "Content-Type": "application/json; charset=utf-8"
            }
            if(app.user!=null && app.user.identity.hasOwnProperty('doctorId') && app.user.identity.doctorId!=''){
                headers['doctorid']=app.user.identity.doctorId;
            }
            return $http({
                method: 'POST',
                url: SETTINGS.apiBasePath + '/user/login',
                dataType: 'json',
                data: request,
                headers:headers
            })
        };

        this.getUserList = function (token) {
            var headers={
                "Content-Type": "application/json; charset=utf-8",
                'Authorization': 'Bearer '+token
            }
            return $http({
                method: 'GET',
                url: 'https://us1.pusherplatform.io/services/chatkit/v1/3c2d3a4a-4b98-4652-b960-43a7b91cd1b4/users',
                headers:headers
            })
        };
        this.createNewUser = function (req) {
            var headers={
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
            }
            return $http({
              method: 'POST',
              // url: 'https://us1.pusherplatform.io/services/chatkit/v1/3c2d3a4a-4b98-4652-b960-43a7b91cd1b4/users',
              url: '/php/index.php',
              data: $.param(req),
              headers:headers
            })
        };


        this.logout = function () {
            var headers={
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer "+app.getAuthToken(),
            }
            if(app.user!=null && app.user.identity.hasOwnProperty('doctorId') && app.user.identity.doctorId!=''){
                headers['doctorid']=app.user.identity.doctorId;
            }
            return $http({
                method: 'GET',
                url: SETTINGS.apiBasePath + '/user/logout',
                headers:headers
            })
        };

    });


    /*  define routes for the app */

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider, $cookieStore, $location) {
            $routeProvider
                    .when("/", {
                        templateUrl: "views/dashboard.html",
                        controller: "chatCtrl",
                        controllerAs: 'chat',
                        resolve: {
                            'acl': ['$q', 'AclService','$location','$cookieStore', function ($q,AclService,$location,$cookieStore) {


                                    var authKey = $cookieStore.get('login');
                                    if (authKey == undefined) {
                                        $location.path('/');
                                        return true;
                                    }

                                }]
                        }
                    })
                    .when("/login", {
                        templateUrl: "views/login.html",
                        controller: "loginCtrl",
                        controllerAs: 'lgc',
                        resolve: {
                            'acl': ['$q', 'AclService', '$cookieStore', '$location', function ($q, AclService, $cookieStore, $location) {

                                    var authKey = $cookieStore.get('login');
                                    if (authKey != undefined) {
                                        $location.path('/');
                                        return true;
                                    }
                                }]
                        }
                    });

            $locationProvider.html5Mode(true);
        }])
            .run(function ($rootScope) {
                $rootScope.$on("$routeChangeSuccess", function () {
                    $(".page-mobile-menu").hide();
                })

            });






    app.run(function (AclService, $cookies,api, $cookieStore, $location, app,$http) {

//        $cookieStore.put('junoauthkey', "12312sd254j439*isn");
//        console.log($cookieStore.get('dasd'));
        var authKey = $cookieStore.get('login');

//            console.log(authPerm);
        if (authKey == undefined) {
            $location.path('/login');

        } else {
            try{
               // $location.path('/');
                authKey = JSON.parse(atob($cookieStore.get('login')));
                console.log(authKey);
                $('#userId').val(authKey.employeeId);
                app.setIdentity(authKey);
                }catch(e){
                    $cookieStore.remove("login");
                    $location.path('/login');
                }

        }


    });

    app.run(['$rootScope', '$location', function ($rootScope, $location) {

            // If the route change failed due to our "Unauthorized" error, redirect them
            $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
                if (rejection === 'Unauthorized') {
                    $location.path('/error');
                } else if (rejection === 'LoginRequired') {
                    $location.path('/login');
                }
            })
        }]);

    angular.module('myapp').directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter, {'event': event});
                    });

                    event.preventDefault();
                }
            });
        };
    });






})();
