angular.module('SA4LaunchPad.services', [])

//Mock AppSet Data
.factory('AppService', function () {
    // Some fake testing data

    var currentuser = {name: 'Tony Berry', email: 'tberry@smartapps4.com', icon: 'http://ionicframework.com/img/docs/venkman.jpg'};

    var appsets = [
      { AppSetId: 0, Name: 'Discrete Mfg - Reps', Description: 'AppSet for reps at discrete manufacturing', Status: 'Design', Version: '0.01', 
        apps : [
          {AppId: 0, Name: 'My App 0', Description: 'App0 Description', Status: 'Design', Version: '0.01',
            Icon: 'http://ionicframework.com/img/docs/venkman.jpg',
            cards : [ 
              {CardId: 0, Name: 'Card0', Type: 'Type 1', Content: 'Card1 Content'},
              {CardId: 1, Name: 'Card1', Type: 'Type 2', Content: 'Card2 Content'}
            ]
          },
          {AppId: 1, Name: 'My App 1', Description: 'App1 Description', Status: 'Design', Version: '0.01',
            Icon: 'http://ionicframework.com/img/docs/stantz.jpg', 
            cards : [
              {CardId: 2, Name: 'Card2', Type: 'Type 1', Content: 'Card2 Content'},
              {CardId: 3, Name: 'Card3', Type: 'Type 2', Content: 'Card3 Content'}
            ]
          },
        ]
      },
      { AppSetId: 1, Name: 'Fin Serv - Reps', Description: 'AppSet for reps at finserv ', Status: 'Design', Version: '0.01', 
        apps : [
          {AppId: 2, Name: 'App2', Description: 'App2 Description', Status: 'Design', Version: '0.01', 
            Icon: 'http://ionicframework.com/img/docs/venkman.jpg',
            cards : [ 
              {CardId: 4, Name: 'Card4', Type: 'Type 1', Content: 'Card4 Content'},
              {CardId: 5, Name: 'Card5', Type: 'Type 2', Content: 'Card5 Content'}
            ]
          },
          {AppId: 3, Name: 'App3', Description: 'App3 Description', Status: 'Design', Version: '0.01', 
            Icon: 'http://ionicframework.com/img/docs/stantz.jpg', 
            cards : [
              {CardId: 6, Name: 'Card6', Type: 'Type 1', Content: 'Card6 Content'},
              {CardId: 7, Name: 'Card7', Type: 'Type 2', Content: 'Card7 Content'}
            ]
          },
        ]
      },
      { AppSetId: 2, Name: 'Insurance - Mgrs', Description: 'AppSet for mgrs at insurance ', Status: 'Design', Version: '0.01', 
        apps : [
          {AppId: 4, Name: 'Core App 1', Description: 'App4 Description', Status: 'Design', Version: '0.01', 
            Icon: 'http://ionicframework.com/img/docs/venkman.jpg',
            cards : [ 
              {CardId: 8, Name: 'Card8', Type: 'Type 1', Content: 'Card8 Content'},
              {CardId: 9, Name: 'Card9', Type: 'Type 2', Content: 'Card9 Content'},
              {CardId: 10, Name: 'Card10', Type: 'Type 2', Content: 'Card10 Content'},
            ]
          },
          {AppId: 5, Name: 'Core App 3', Description: 'App3 Description', Status: 'Design', Version: '0.01', 
            Icon: 'http://ionicframework.com/img/docs/stantz.jpg', 
            cards : [
              {CardId: 11, Name: 'Card6', Type: 'Type 1', Content: 'Card6 Content'},
              {CardId: 12, Name: 'Card7', Type: 'Type 2', Content: 'Card7 Content'}
            ]
          },
          {AppId: 6, Name: 'Core App 4', Description: 'App3 Description', Status: 'Design', Version: '0.01', 
            Icon: 'http://ionicframework.com/img/docs/stantz.jpg', 
            cards : [
              {CardId: 13, Name: 'Card6', Type: 'Type 1', Content: 'Card6 Content'},
              {CardId: 14, Name: 'Card7', Type: 'Type 2', Content: 'Card7 Content'}
            ]
          },
        ]
      }
    ];

    return {

      allAppSets: function(){
        return appsets;
      },
      getAppSet: function (appSetId) {
        return appsets[appSetId]
      },
      getApp: function (appSetId, appId) {
        // Simple index lookup
        return appsets[appSetId].apps[appId];
      },
      getcurrentUser: function(){
        return currentuser;
      }
    }
  });