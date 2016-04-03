juke
.directive('albumsList', function () {
  return {
  	restrict: 'E',
    scope: {
      albums: '='
    },
    templateUrl: '/js/album/templates/albums-list.html'
  };
});