
(function () {
    app.controller("loginCtrl", function (AclService, $scope, $location, $cookies, $cookieStore, app, api) {
        var lgc = this;
        lgc.loginUserInfo=$cookieStore.get('login');
        lgc.employeeId= null;
        lgc.menuList=null;
        lgc.init=function(){

            if(lgc.loginUserInfo!=undefined){
                lgc.loginUserInfo=JSON.parse(atob(lgc.loginUserInfo));
                lgc.menuList=lgc.loginUserInfo.menuList;
                $location.path('/');
            }
        }
        lgc.init();
        app.setTitle("Login | Juno Clinic Admin");
        lgc.userList={
            'yogesh_tester':[

            ],
            'yogesh_tester2':[

            ]
        }


        lgc.login = function ($event) {
            if ($("#login-form").valid()) {
                if(lgc.userList[lgc.employeeId]==undefined){
                    $('#createPartModal').modal('show');
                    return false;
                }
                lgc.menuList=lgc.userList[lgc.employeeId];
                console.log(lgc.menuList);
                var request = {"employeeId": lgc.employeeId,login:true,menuList:lgc.menuList};
                $cookieStore.put('login', btoa(JSON.stringify(request)));
                location.reload();
            }
        }
        lgc.logout = function ($event) {
          $('#userId').val('');
            $cookieStore.remove("login");
            location.href='/login';
        }



    })


})();
