var checkBalance=()=>{
	document.getElementById("balanceId").value=JSON.parse(localStorage.getItem("user")).amount;
}