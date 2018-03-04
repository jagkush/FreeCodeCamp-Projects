var app = angular.module('twitchApp', ['ng-route']);

app.factory('twitchAPI', function($http){

	var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	 return functio	var twitchUrl = 'https://wind-bow.gomix.me/twitch-api/';

n() {
    return channels.map(function(channel) {
      return {
        api : $http.get(twitchUrl + 'channels/' + channel),
        stream : $http.get(twitchUrl + 'streams/' + channel),
        channel : channel
      };
    });
  }	
});

	app.controller('twitchCtrl', function($scope, twitchAPI) {
  $scope.channels = [];
  $scope.filter = undefined;
  
  $scope.onlineFilter = function() {
    $scope.filter = true;
  }
  
  $scope.offlineFilter = function() {
    $scope.filter = false;
  }
  
  $scope.resetFilter = function() {
    $scope.filter = undefined;
  }

  twitchAPI().forEach(function(twitch) { 
     twitch.api.success(function(data){
       var channel = {
           stream : {},
           title : data.display_name,
           status : data.status,
           logo : data.logo || new GIXI(100).getImage(),
           url : data.url
        };

        twitch.stream.success(function(data) {
         if (!data.stream) {
           channel.stream.isLive = false;
         } else {
           channel.stream.isLive = true
           channel.stream.game = data.stream.game;
         }
       });
       
       $scope.channels.push(channel);
     });
     
     twitch.api.catch(function(data) {
         $scope.channels.push({
           title : twitch.channel,
           status : 'Account Closed',
           logo : new GIXI(100).getImage(),
           closed : true,
           url : "#"
         });
     });
     
   });
});

/**
	for (var i=0; i < user.length; i++)	{
		var link = ' https://wind-bow.gomix.me/twitch-api/streams/';
		var api = link + user[i];
		var request = new XMLHttpRequest();
			request.open('GET',api);
			request.responseType = 'json';
			request.send();

		request.onload = function(
			var data = request.response;
			allData(data);
			onlineData(data);
			offLline(data);
			)

		function allData(){

		}

		function onlineData(){

		}

		function offlineData(){
			
		}
	}
}
**/
