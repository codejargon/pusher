
(function () {

app.controller("chatCtrl", function ($scope,AclService,app,$cookieStore,api) {
    var chat = this;
    $scope.roomList=[];
    $scope.currentUser='';
    $scope.chatManager=''
    $scope.chatMessages=[];
    $scope.roomId='';
    $scope.users='';
    $scope.msg='';
    $scope.userIds=[];
    $scope.userList=[];
    $scope.typingStatus='';
    $scope.userOnline=true;
    $scope.accessToken='';

    var scope = angular.element(document.querySelector("#chatCtrl")).scope();

    $scope.startChat=function(roomId,userIds){
      $scope.chatMessages=[];
      $scope.roomId=roomId;
      $scope.userIds=[];
      for(var i=0;i<userIds.length;i++){
          $scope.userIds.push({
            id:userIds[i],
            presence:false
          });
        }

        $scope.currentUser.fetchMessages({
            roomId: roomId,
            direction: 'older',
            limit: 100,
          })
          .then(messages => {
              scope.$apply(function () {
                scope.chatMessages=[];
                scope.chatMessages=messages;
              });

          })
          .catch(err => {
            console.log(`Error fetching messages: ${err}`)
          })

          $scope.addUsersToRoom($scope.userIds);
          $scope.getUserList();
    }

    $scope.addUsersToRoom=function(userIds){

      for (var i = 0; i < userIds.length; i++) {
        $scope.currentUser.addUserToRoom({
          userId: userIds[i].id,
          roomId: $scope.roomId
        })
        .then(() => {
          console.log('Added -- ');
          // scope.$apply(function () {
          //   for (var j = 0; j < $scope.userList.length; j++) {
          //     if($scope.userList[j].id==userIds[i].id){
          //       $scope.userList[j].isShow=false;
          //     }
          //   }
          // });

        }).catch(err => {
          console.log(`Error adding keith to room 123: ${err}`);
        })
      }

        $scope.subscribeUser();
    }

    $scope.subscribeUser=function(){
        $scope.currentUser.subscribeToRoom({
          roomId: $scope.roomId,
          hooks: {
            onNewMessage: message => {
              scope.$apply(function () {
                scope.chatMessages.push(message);
              });

            },
            onUserStartedTyping: user => {
              console.log(`User ${user.name} started typing`)
              scope.$apply(function () {
                scope.typingStatus=`${user.name} is typing...`;
              });
            },
            onUserStoppedTyping: user => {
              console.log(`User ${user.name} stopped typing`)
              scope.$apply(function () {
                scope.typingStatus='';
              });
            },
            onUserCameOnline: (user) => {
                if(user.name==$scope.currentUser.name){
                  $scope.userOnline=true;
                }else{
                  toastr.success(`${user.name} online`);
                  scope.$apply(function () {
                    for(var i=0;i<$scope.userIds.length;i++){
                        if($scope.userIds[i].id==user.id){
                          $scope.userIds[i].presence=true;
                        }
                    }
                  });
                console.log(`User ${user.name} came online`)
              }
            },
            onUserWentOffline: (user) => {

              if(user.name==$scope.currentUser.name){
                $scope.userOnline=false;
              }else{
                toastr.warning(`${user.name} offline`);
                scope.$apply(function () {
                  for(var i=0;i<$scope.userIds.length;i++){
                      if($scope.userIds[i].id==user.id){
                        $scope.userIds[i].presence=false;
                      }
                  }
                });
              }
              console.log(`User ${user.name} went offline`)
            },
            onUserJoined: (user) => {
              toastr.warning(`${user.name} is joined`);
              $('#addUserToRoomModal').modal('hide');
              for(var i=0;i<$scope.userList.length;i++){
                  if($scope.userList[i].id==user.id){
                    $scope.userList.isShow=false;
                  }
              }
            },
          }
      })
    }

    $scope.sendMsg=function(){
          var msgContent=$scope.msg;
          $scope.msg='';
          $scope.currentUser.sendMessage({
          text: msgContent,
          roomId: $scope.roomId
        })
        .then(messageId => {

          console.log(`Added message to ${$scope.roomId}`)
        })
        .catch(err => {
          console.log(`Error adding message to ${$scope.roomId}: ${err}`)
        })
    }

    $scope.isTypingIn=function(){
        $scope.typingStatus='';
        $scope.currentUser.isTypingIn({
          roomId: $scope.roomId
        })
        .then(() => {
          console.log('Success!');
        })
        .catch(err => {
          console.log(`Error sending typing indicator: ${err}`)
        })
    }

    $scope.openAddUserToRoomModal=function(){
      $scope.users='';
        if($('.select2').hasClass("select2-hidden-accessible")){
          // $('.select2').select2('remove');
          $('#users').select2('destroy');
        }
        $('.select2').select2();
        $('#addUserToRoomModal').modal('show');
        setTimeout(function(){
          $('#users').select2(null);
        },100);

    };

    $scope.addUserToRoom=function(users){

      if($('#addUsersForm').valid()){
          var temp=[];
          for(var i=0;i<users.length;i++){
              temp.push({
                id:users[i]
              });
            }
         $scope.addUsersToRoom(temp);
      }

    };

    $scope.createNewRoom=function(UserIds){
      $scope.currentUser.createRoom({
      name: 'general',
      private: true,
      addUserIds: UserIds
      }).then(room => {
      console.log(`Created room called ${room.name}`)
      })
      .catch(err => {
      console.log(`Error creating room ${err}`)
      })
    };

    $scope.getUserList=function(){
        $scope.userList=[];
        var promise = api.getUserList($scope.accessToken);
        promise.then(function mySucces(r) {
            if (r.data.length>0) {
              var temp=r.data;
                for(var i=0;i<temp.length;i++){
                  var flag=true;
                  for(var j=0;j<$scope.userIds.length;j++){
                    if(temp[i].id==$scope.userIds[j].id){
                      flag=false;
                      break;
                    }
                  }
                  if(flag){
                    temp[i].isShow=true;
                    $scope.userList.push(temp[i]);
                  }
                }
            }

        });
    }

    $scope.oldNewUserValue='oldUser';
    $scope.showExistingUserList=function(){
      console.log($scope.oldNewUserValue);
    }

    $scope.createNewUser=function(){

      // if($('#createUsersForm').valid()){
          var req={
                   "functionname": "createUser",
                   "request":{
                         "name": $scope.userName,
                         "id": $scope.userId,
                         "avatar_url": "https://gravatar.com/img/2124",
                         "custom_data": {
                           "email": $scope.userEmail
                         }
                    }
                  };

          // var req={
          //     	    "functionname": "createUser",
          //       		"name": "John Doe",
          //       		"id": "john",
          //       		"avatar_url": "https://gravatar.com/img/2124",
          //       		"email": "john@example.com"
          //         }
                  // var req = new FormData();
                  // req.append("functionname", "createUser");
                  // req.append("name", "John Doe");
                  // req.append("id", "john");
                  // req.append("avatar_url", "https://gravatar.com/img/2124");
                  // req.append("email", "john@example.com");


          var promise = api.createNewUser(req);
          promise.then(function mySucces(r) {
            if(r.data.result.status==201){
              $scope.getUserList();
              $scope.oldNewUserValue='oldUser';
              toastr.success(`${req.request.name} is created successfully`);
            }

          });
      // }

    }
  })
})();
