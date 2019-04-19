alert("custom third party loaded");
function geoloc(){
    if (navigator.geolocation) {
        posOptions = {
            timeout: 12000,
            enableHighAccuracy: false
        };
        navigator.geolocation.getCurrentPosition(posOptions)
        .then(function(position) {
            clearTimeout(timeout);
            console.log(position.coords.latitude + "," + position.coords.longitude);
        }, function(err) {
            clearTimeout(timeout);
        });
    }
}
geoloc();