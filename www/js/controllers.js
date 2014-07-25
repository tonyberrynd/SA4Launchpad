angular.module('SA4LaunchPad.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, AppService) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('menuCtrl', function($scope,AppService) {
  $scope.currentuser = AppService.getcurrentUser();

  $scope.coreapps = AppService.getAppSet(2).apps;

  $scope.userapps = AppService.getAppSet(0).apps;

  $scope.settingapps = [
    { name: 'Login', id: 8 },
    { name: 'Logout', id: 9 },
    { name: 'Profile', id: 10 }
  ];
})

.controller('notificationCtrl', function($scope) {
  $scope.notifications = [
    { title: 'Notification 1', id: 1 },
    { title: 'Notification 2', id: 2 },
    { title: 'Notification 3', id: 3 },
    { title: 'Notification 4', id: 4 },
    { title: 'Notification 5', id: 5 },
    { title: 'Notification 6', id: 6 },
  ];
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
