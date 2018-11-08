//primary
$.simpleWeather({
  location: 99224,
  success: function(weather) {
     //console.log(weather.image);
    //console.log(weather.city);
    //console.log(weather.temp);
    //console.log(weather.updated);
     $('.image img').attr('src', weather.image);
    $('.city').text(weather.city);
    $('.temp').text(weather.temp);
    $('.time').text(weather.updated);
   }, 
  error: function(error) {
    console.log('Go outside!');
  }
}); 
//secondary
$.simpleWeather({
location: 23665,
success: function(weather) {
  $('#secondary .image img').attr('src', weather.image);
  $('#secondary .city').text(weather.city);
  $('#secondary .temp').text(weather.temp);
  $('#secondary .time').text(weather.updated);
 }, 
error: function(error) {
  console.log('Go outside!');
}
});
//geolocation
// Geolocation Check
if ( 'geolocation' in navigator ) {

$('#geolocation').show();

} else {

$('#geolocation *').hide();
$('#geolocation').html('<p>Not Available</p>');

}
// Get Weather
$('button').click( function(){

navigator.geolocation.getCurrentPosition(function(position) {
 
 // Check lat/long coordinates
 var lat = position.coords.latitude;
 var long = position.coords.longitude;
 
 //console.log(lat, long);
 
 // Get Weather
 getWeather( lat + ',' + long );
  
});
});
// Define Get Weather
var getWeather = function( position ) {
console.log(location);
$.simpleWeather({
location: location,
unit: 'f',
success: function(weather) {
 

 
 // Display Data
  $('#geolocation .image img').attr('src', weather.image);
  $('#geolocation .city').text(weather.city);
  $('#geolocation .temp').text(weather.temp);
  $('#geolocation .time').text(weather.updated);
},
error: function(error) {
 // Show if weather cannot be retreived
 console.log('Look Outside.');
}
});
};
//$.simpleWeather({
//location: location,
//success: function(weather) {
   //$('#geolocation .image img').attr('src', weather.image);
  //$('#geolocation .city').text(weather.city);
  //$('#geolocation .temp').text(weather.temp);
  //$('#geolocation .time').text(weather.updated);
 //}, 
//error: function(error) {
  //console.log('Go outside!');
//}
//}); 