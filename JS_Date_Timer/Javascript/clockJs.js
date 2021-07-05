function clockUpdate(){
	var localDate=new Date();

  document.getElementById("clockId").innerHTML = localDate.toLocaleTimeString();
}
setInterval(clockUpdate,1000);