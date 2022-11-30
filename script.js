function accesskey() {
  const inputLocation = document.getElementById("CityName");
  const inputkey = document.getElementById("access_key");

  if (inputLocation.value !== "" && inputkey.value !== "") {
    const loc = document.getElementById("CityName").value;
    const key = document.getElementById("access_key").value;
    const url = `http://api.weatherstack.com/current?access_key=${key}&query=${loc}}`;

    async function wheatherdata(url) {
      const response = await fetch(url);
      data = await response.json();
      console.log(data);
      console.log(data.address);
      document.getElementById("Location").innerHTML = "Location : " + data.location.name;
      document.getElementById("lat").innerHTML = "Lat : " + data.location.lat;
      document.getElementById("Time_Zone").innerHTML =
        "Time Zone : " + data.location.timezone_id;
      document.getElementById("Wind_speed").innerHTML =
        "Wind Speed : " + data.current.wind_speed;
      document.getElementById("pressure").innerHTML =
        "Pressure : " + data.current.pressure;
      document.getElementById("Humidity").innerHTML =
        "Humidity : " + data.current.humidity;
      document.getElementById("Wind_Direction").innerHTML =
        "Wind Direction :  " + data.current.wind_dir;
      document.getElementById("UV_Index").innerHTML =
        "UV Index : " + data.current.uv_index;
      document.getElementById("Feels_like").innerHTML =
        "Feels like : " + data.current.feelslike;
    }
    wheatherdata(url);
  } else if (inputLocation.value == "") {
    alert("Please Enter Valid Location");
  } else if (acesskey.value == "") {
    alert("Please Enter Valid Acess Token");
  }
}
