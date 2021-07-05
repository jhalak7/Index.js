function showLocation(){
	var pos;
	navigator.geolocation.getCurrentPosition(show);
}
function show(pos)
{

	document.getElementById("geoId").innerHTML="Latitude: "+pos.coords.latitude+"<br>Longitude: "+pos.coords.longitude;
}