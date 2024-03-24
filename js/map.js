// JavaScript source code
var mapCanvas = document.getElementById("map");
var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2), zoom: 10
}
var map = new google.maps.Map(mapCanvas, mapOptions);


//Slider 

var n = 1;
function slideFront() {
    n = n + 1
    if (n > 3) { n = 1 }
    document.getElementById("a").src = n + ".jpg";

}
function slideBack() {
    n = n - 1
    if (n < 1) { n = 3 }
    document.getElementById("a").src = n + ".jpg";

}