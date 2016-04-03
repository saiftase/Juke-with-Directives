juke.directive("player", function(){
  return {
    restrict: 'E',
    controller: 'PlayerCtrl',
    templateUrl: '/js/player/templates/player.html'
  };
});

juke.directive('updateTime', ["PlayerFactory", function(PlayerFactory){
	return {
		restrict: 'A',
		scope: {},
		link: function(scope, element, attr){
			element.on('click', function(event){
				
				var x = event.clientX - element[0].offsetLeft; //Click position 
				var position = x / element[0].clientWidth;
				
				if(position >= 0){
					PlayerFactory.setPosition(position);
				}

			});
		}
	}
}]);