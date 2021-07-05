

function changeIt(){
	document.getElementById("buttonChangeId").addEventListener("mouseover",function(){
	document.getElementById("buttonChangeId").classList.add("putThis");
	})

	document.getElementById("buttonChangeId").addEventListener("mouseout",function(){
	document.getElementById("buttonChangeId").classList.remove("putThis");
	})
}