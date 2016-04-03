juke
.directive('songsList', ['PlayerFactory', function (PlayerFactory) {
  return {
  	restrict: 'E',
    scope: {
      songs: '='
    },
    templateUrl: '/js/song/templates/songs-list.html', 
    link: function(scope, element, attr){
    	scope.album = scope.songs;

    	scope.toggle = function (song) {
    	  if (song !== PlayerFactory.getCurrentSong()) {
    	    PlayerFactory.start(song, scope.songs);
    	  } else if ( PlayerFactory.isPlaying() ) {
    	    PlayerFactory.pause();
    	  } else {
    	    PlayerFactory.resume();
    	  }
    	};

    	scope.getCurrentSong = function () {
    	  return PlayerFactory.getCurrentSong();
    	};

    	scope.isPlaying = function (song) {
    	  return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
    	};
    }
  };
}]);