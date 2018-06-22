<!DOCTYPE html>
<html >
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Admin Solastis | Dashboard</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="/bower_components/font-awesome/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="/bower_components/Ionicons/css/ionicons.min.css">
  <!-- Theme style -->

  <link rel="stylesheet" href="/bower_components/select2/dist/css/select2.min.css">

  <link rel="stylesheet" href="/dist/css/AdminLTE.min.css">
  <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
  <link rel="stylesheet" href="/dist/css/skins/_all-skins.min.css">
  <!-- Morris chart -->
  <link rel="stylesheet" href="/bower_components/morris.js/morris.css">
  <!-- jvectormap -->
  <link rel="stylesheet" href="/bower_components/jvectormap/jquery-jvectormap.css">
  <!-- Date Picker -->
  <link rel="stylesheet" href="/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css">
  <!-- Daterange picker -->
  <link rel="stylesheet" href="/bower_components/bootstrap-daterangepicker/daterangepicker.css">
  <!-- bootstrap wysihtml5 - text editor -->
  <link rel="stylesheet" href="/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css">
  <link rel="stylesheet" href="/plugins/iCheck/square/blue.css">
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
  <style>
    .content-wrapper{
      height: -webkit-fill-available !important;
    }
  </style>
  <base href="/">
</head>
<body ng-app="myapp" class="hold-transition skin-green sidebar-mini">
<div class="wrapper">
 <!-- BEGIN HEADER -->
 <div  data-ng-include="'views/layout/header.html'" data-ng-controller="loginCtrl as lgc"></div>
 <!-- END HEADER -->

  <!-- START left side nav -->
  <div  data-ng-include="'views/layout/leftSideNav.html'" data-ng-controller="loginCtrl as lgc"></div>
  <!-- END left side nav -->

  <!-- Content Wrapper. Contains page content -->

    <!-- BEGIN PAGE CONTENT -->
      <div data-ng-view="" ></div>
    <!-- END PAGE CONTENT -->
  <!-- /.content-wrapper -->

  <!-- START left side nav -->
  <div  data-ng-include="'views/layout/footer.html'"></div>
  <!-- END left side nav -->


  <!-- Add the sidebar's background. This div must be placed
       immediately after the control sidebar -->
  <div class="control-sidebar-bg"></div>
</div>
<!-- ./wrapper -->

<input type="hidden" value="" id="userId" />
<!-- jQuery 3 -->
<script src="/bower_components/jquery/dist/jquery.min.js"></script>
<!-- jQuery UI 1.11.4 -->
<script src="/bower_components/jquery-ui/jquery-ui.min.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button);
</script>
<!-- Bootstrap 3.3.7 -->
<script src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="/bower_components/select2/dist/js/select2.full.min.js"></script>
<!-- Sparkline -->
<script src="/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js"></script>
<!-- jvectormap -->
<script src="/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
<script src="/plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
<!-- jQuery Knob Chart -->
<script src="/bower_components/jquery-knob/dist/jquery.knob.min.js"></script>
<!-- daterangepicker -->
<script src="/bower_components/moment/min/moment.min.js"></script>
<script src="/bower_components/bootstrap-daterangepicker/daterangepicker.js"></script>
<!-- datepicker -->
<script src="/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
<!-- Bootstrap WYSIHTML5 -->
<script src="/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"></script>
<!-- Slimscroll -->
<script src="/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<!-- FastClick -->
<script src="/bower_components/fastclick/lib/fastclick.js"></script>
<!-- AdminLTE App -->
<script src="/dist/js/adminlte.min.js"></script>

<script src="/dist/js/angular.min.js"></script>
<script src="/dist/plugins/angularjs/angular-sanitize.min.js"></script>
<script src="/dist/plugins/angularjs/angular-touch.min.js"></script>
<script src="/dist/plugins/angularjs/plugins/angular-ui-router.min.js"></script>
<script src="/dist/plugins/angularjs/plugins/ocLazyLoad.min.js"></script>
<script src="/dist/js/ui-bootstrap-tpls-0.12.1.min.js"></script>
<script src="/dist/plugins/angular-cookies/angular-cookies.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.js"></script>
<script src="/dist/plugins/angular-acl/angular-acl.min.js"></script>
<script src="/dist/js/pagination.js"></script>
<script src="/dist/js/jquery.blockui.min.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js" type="text/javascript"></script>

<!-- AdminLTE for demo purposes -->
<script src="/dist/js/demo.js"></script>
 <!-- END THEME LAYOUT SCRIPTS -->

 <script src="/plugins/jquery-validation/dist/jquery.validate.min.js"></script>
  <script src="/plugins/jquery-validation/dist/additional-methods.min.js"></script>

 <script type="text/javascript">
  var _c = new Date().getTime();
  var controllerList=["loginCtrl.js","chatCtrl.js"];

  document.write('<script type="text/javascript" src="/dist/js/app.js?v='+_c+'"><\/script>');

  for(var i=0;i<controllerList.length;i++){
      document.write('<script type="text/javascript" src="/controllers/'+controllerList[i]+'?v='+_c+'"><\/script>');
  }


</script>
<!-- iCheck -->
<script src="/plugins/iCheck/icheck.min.js"></script>
    <script src="/dist/js/chatkit.js"></script>
<script>
  $(function () {
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' /* optional */
    });
  });




  function connect(){

    const chatManager = new window.Chatkit.ChatManager(
      // {
      //   instanceLocator: 'v1:us1:3c2d3a4a-4b98-4652-b960-43a7b91cd1b4',
      //   userId: $('#userId').val(),
      //   tokenProvider: new window.Chatkit.TokenProvider({ url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/3c2d3a4a-4b98-4652-b960-43a7b91cd1b4/token' })
      // }
      {
        instanceLocator: 'v1:us1:3c2d3a4a-4b98-4652-b960-43a7b91cd1b4',
        "instance": "3c2d3a4a-4b98-4652-b960-43a7b91cd1b4",
        "iss": "9c283740-a2b8-4ce2-a243-b1b8fa5110dc:1BssznN3WRarocEx5hWrn/xteb8anrK3QaORxR1Bl24=",
        "iat": 1508752709,
        "exp": 1508839109,
        "sub": $('#userId').val(),
        userId: $('#userId').val(),
        su: true,
        tokenProvider: new window.Chatkit.TokenProvider({ url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/3c2d3a4a-4b98-4652-b960-43a7b91cd1b4/token' })
      }
  )


    chatManager.connect()
    .then(currentUser => {
      console.log('User 1 Successful connection', currentUser);
      var $scope = angular.element(document.querySelector("#chatCtrl")).scope();
      $scope.$apply(function () {
        $scope.chatManager=chatManager;
        $scope.currentUser=currentUser;
        $scope.roomList=$scope.currentUser.rooms;
        $scope.accessToken=$scope.currentUser.apiInstance.tokenProvider.cachedToken;

      });
    })
    .catch(err => {
      console.log('Error on connection', err)
    })
  }

  $(function(){
    if($('#userId').val()!=''){
      connect();
    }
  });
</script>
</body>
</html>
