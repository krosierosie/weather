// City One - Cheney
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

// City Two - Hilo
$.simpleWeather({
  location: 96720,
  success: function(weather) {
     
     $('#city-two h2').text(weather.city);
     $('#city-two .image img').attr( 'src', weather.image  );
     $('#city-two .temp').text(weather.temp);
     $('#city-two .time').text(weather.updated);
  
  }, 
  error: function(error) {
    console.log('Go outside!');
  }
});