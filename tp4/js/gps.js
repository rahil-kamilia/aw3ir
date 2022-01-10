// demande de la localisation à l'utilisateur
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      document.querySelector("#map").innerHTML =
        "Geolocation is not supported by this browser.";
    }
  }
  
  // Si l"utilisateur l'autorise, on récupère les coordonnées dans l'objet "position"
  function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    // console.log(latlon);
    $("#adresse").val(position.coords.latitude + "," + position.coords.longitude);

    var img_url = `https://maps.googleapis.com/maps/api/staticmap?center=${latlon}&zoom=14&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg`;
  
    document.querySelector("#map").innerHTML = `<img src='${img_url}'>`;
  }
  
  // Au cas ou l'utilisateur refuse
  // Ou si une erreur arrive
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        document.querySelector("#map").innerHTML =
          "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        document.querySelector("#map").innerHTML =
          "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        document.querySelector("#map").innerHTML =
          "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        document.querySelector("#map").innerHTML = "An unknown error occurred.";
        break;
    }
  }
  function displayLocation(latitude,longitude){
    var geocoder;
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(latitude, longitude);

    geocoder.geocode(
        {'latLng': latlng}, 
        function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var add= results[0].formatted_address ;
                    var  value=add.split(",");

                    count=value.length;
                    country=value[count-1];
                    state=value[count-2];
                    city=value[count-3];
                    x.innerHTML = "city name is: " + city;
                }
                else  {
                    x.innerHTML = "address not found";
                }
            }
            else {
                x.innerHTML = "Geocoder failed due to: " + status;
            }
        }
    );
}