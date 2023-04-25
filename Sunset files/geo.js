let sunrise;
let sunset;
let sunriseStr, sunsetStr, strTime, local_time;

const sunrise_time = document.querySelector('#sunrise-time');
const sunset_time = document.querySelector('#sunset-time');
const viewer = document.querySelector('#view-info');

let time = new Date(Date.now());

function auto_on_off() {
 
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let positionInfo = "Current Position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
            //document.getElementById("result").innerHTML = positionInfo;
            fetch(`https://api.sunrise-sunset.org/json?lat=${position.coords.latitude}&lng=${position.coords.longitude}&date=today`,
                {
                    method: 'GET',
                })
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    sunrise = data.results.sunrise.split(" ")[0];
                    sunset = data.results.sunset.split(" ")[0];
                    local_time = time.toTimeString().split(" ")[0];
                    console.log(`Actual time : ${local_time}`);
                    console.log(`Sunrise Time : ${sunrise} and Sunset Time : ${sunset}`)

                    //insert value in our html visual
                    sunrise_time.innerHTML = sunrise;
                    sunset_time.innerHTML = sunset;

                    //comparing value
                    if(sunrise < local_time && sunset > local_time){
                        //When sun is up, change the viewer text
                        viewer.innerHTML = "SUN UP";
                    }else{
                        //And when sun down, change accordingly
                        viewer.innerHTML = "SUN DOWN";
                    }

                })
                .catch(function (err) {
                    console.log(err)
                });
        });
    } else {
        alert("Change Browser man.");
    }

}

document.addEventListener('DOMContentLoaded', function () {
    
    setTimeout(function(){auto_on_off()}, 500);
    //auto_on_off();
});