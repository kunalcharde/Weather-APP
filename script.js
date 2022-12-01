function accesskey() {
  const inputLocation = document.getElementById("CityName");
  const inputkey = document.getElementById("access_key");

  if (inputLocation.value !== "" && inputkey.value !== "") {
    const loc = document.getElementById("CityName").value;
    const token = document.getElementById("access_key").value;
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=us&key=${token}&contentType=json`;

    async function wheatherdata(url) {
      const response = await fetch(url);
      data = await response.json();
      document.getElementById("Location_name").innerHTML = "Location : " + data.address;
      document.getElementById("lat").innerHTML = "Lat : " + data.latitude;
      document.getElementById("Time_Zone").innerHTML =
        "Time Zone : " + data.timezone;
      document.getElementById("Wind_speed").innerHTML =
        "Wind Speed : " + data.currentConditions.windspeed;
      document.getElementById("pressure").innerHTML =
        "Pressure : " + data.currentConditions.pressure;
      document.getElementById("Humidity").innerHTML =
        "Humidity : " +data.currentConditions.humidity;
      document.getElementById("Wind_Direction").innerHTML =
        "Wind Direction :  " + data.currentConditions.winddir;
      document.getElementById("UV_Index").innerHTML =
        "UV Index : " + data.currentConditions.uvindex;
      document.getElementById("Feels_like").innerHTML =
        "Feels like : " + data.currentConditions.feelslike;
      document.getElementById("display").style.display ="none";
    }
    wheatherdata(url);
  } else if (inputLocation.value == "") {
    alert("Please Enter Valid Location");
  } else if (inputkey.value == "") {
    alert("Please Enter Valid Acess Token");
  }
}
