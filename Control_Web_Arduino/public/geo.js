let sunrise;
let sunset;
let time = new Date(Date.now());

function showPosition() {


    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let positionInfo = "Your current position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
            document.getElementById("result").innerHTML = positionInfo;
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
                    console.log(time.toTimeString().split(" ")[0]);

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
    showPosition();
});