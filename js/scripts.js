//primary
$.simpleWeather({
    location: 99004,
    success: function(weather) {


      $('#primary .image img').attr('src', weather.image);
      $('#primary .city').text(weather.city);
      $('#primary .temp').text(weather.temp);
      $('#primary .time').text(weather.updated);


    }, 
    error: function(error) {
      console.log('Go outside!');
    }
 });

 //secondary
$.simpleWeather({
  location: 99022,
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
   
   console.log(lat, long);
   
   // Get Weather
   getWeather( lat + ',' + long );
    
  });
});


// Define Get Weather
var getWeather = function( location ) {

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