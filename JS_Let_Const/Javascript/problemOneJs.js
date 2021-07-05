
const E2F="Software Engineer Fresher";
const E2="Software Engineer";
const E3="Senior Software Engineer";
let demoValue="abc";
function getValue(){
	if(document.getElementById("dropId").value=="E2F")
		demoValue=E2F;
	else if(document.getElementById("dropId").value=="E2")
		demoValue=E2;
	else
		demoValue=E3;
}
function constFunction(){
	getValue();
	document.getElementById("nameId").innerHTML=demoValue;
}