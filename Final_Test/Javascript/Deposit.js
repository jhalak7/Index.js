var add=()=>{
	var amount=document.getElementById("amountId").value;
	var userDat=localStorage.getItem("user");
	var userAdd={"amount":amount};
	userAdd.id=userDat.id;
	userAdd.name=userDat.name;

    localStorage.setItem("user",JSON.stringify(userAdd));
}