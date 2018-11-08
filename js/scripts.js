<<<<<<< HEAD
// City One - Cheney
=======
//primary
>>>>>>> 55a9bfb8c90095a5bb00d6b75048e6ca4b11db42
$.simpleWeather({
  location: 99004,
  success: function(weather) {
     
     $('#city-one h2').text(weather.city);
     $('#city-one .image img').attr( 'src', weather.image  );
     $('#city-one .temp').text(weather.temp);
     $('#city-one .time').text(weather.updated);
  
  }, 
  error: function(error) {
    console.log('Go outside!');
  }
});

<<<<<<< HEAD
// City Two - Hilo
$.simpleWeather({
  location: 96720,
  success: function(weather) {
     
     $('#city-two h2').text(weather.city);
     $('#city-two .image img').attr( 'src', weather.image  );
     $('#city-two .temp').text(weather.temp);
     $('#city-two .time').text(weather.updated);
  
=======

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


>>>>>>> 55a9bfb8c90095a5bb00d6b75048e6ca4b11db42
  }, 
  error: function(error) {
    console.log('Go outside!');
  }
<<<<<<< HEAD
});
=======
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
>>>>>>> 55a9bfb8c90095a5bb00d6b75048e6ca4b11db42
