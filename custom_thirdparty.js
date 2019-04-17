alert("custom third party loaded");
if (navigator.geolocation) {
    var timeout = setTimeout(callback, 12000),
    posOptions = {
        timeout: 12000,
        enableHighAccuracy: false
    };
    navigator.geolocation.getCurrentPosition(posOptions)
    .then(function(position) {
        clearTimeout(timeout);
        callback(position.coords.latitude + "," + position.coords.longitude);
    }, function(err) {
        clearTimeout(timeout);
        callback(null);
    });
}