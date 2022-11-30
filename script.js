    const location1 = document.getElementById("location").value;
    const key = document.getElementById("access_key").value;
    const url = `http://api.weatherstack.com/current?access_key=${key}&query=${location1}`;

function wheterdata(){
    
    fetch(url).then(data => data.json()).then(responseData => {
        console.log(responseData)
        document.getElementById("Location").innerHTML= "Location : "+responseData.location.name;
        document.getElementById("lat").innerHTML= "Lat : "+responseData.location.lat;
        document.getElementById("Time_Zone").innerHTML= "Time Zone : "+responseData.location.timezone_id;
        document.getElementById("Wind_speed").innerHTML= "Wind Speed : "+responseData.current.wind_speed;
        document.getElementById("Humidity").innerHTML= "Humidity : "+responseData.current.humidity;
        document.getElementById("Wind_Direction").innerHTML= "Wind Direction :  "+responseData.current.wind_dir;
        document.getElementById("UV_Index").innerHTML= "UV Index : "+responseData.current.uv_index;
        document.getElementById("Feels_like").innerHTML= "Feels like : "+responseData.current.feelslike;
    })

}
function accesskey(){
    checkforerror(location1,key)
}
function checkforerror(input1,input2){
    if(input1 ==""){
        alert("Please Enter Location")
    }
    else if (input2 ==""){
        alert("Please Enter Location")
    }
    else{
        wheterdata();
    }
}