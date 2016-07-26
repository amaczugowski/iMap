angular.module('starter.controllers', ['ionic'])

.controller('MapCtrl', ['$scope', function($scope) {

}])

.directive('map', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      var zValue = scope.$eval(attrs.zoom);
      var lat = scope.$eval(attrs.lat);
      var lng = scope.$eval(attrs.lng);

      var myLatlng = new google.maps.LatLng(lat, lng),
      mapOptions = {
        zoom: zValue,
        center: myLatlng
      },
      map = new google.maps.Map(element[0], mapOptions);

    }
  }
});
