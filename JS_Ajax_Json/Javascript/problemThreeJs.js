
var products={
	"piano":"0",
	"jug":"0",
	"skull":"0",
	"rainbow":"0"
};
function addPianoItems(){

var number=prompt("How many items to you need");
products.piano=+number;

}

function addJugItems(){

var number=prompt("How many items to you need");
products.jug=+number;

}
function addSkullItems(){

var number=prompt("How many items to you need");
products.skull=+number;

}
function addRainbowItems(){

var number=prompt("How many items to you need");
products.rainbow=+number;

}
function showCart(){
	document.getElementById("productDiv").style.backgroundColor="#d2691e";
	document.getElementById("pianoId").innerHTML=products.piano;
	document.getElementById("jugId").innerHTML=products.jug;
	document.getElementById("skullId").innerHTML=products.skull;
	document.getElementById("rainbowId").innerHTML=products.rainbow;
}
