
var display=() =>{
var nameFirst=document.getElementById("nameOne").value;
var nameSecond=document.getElementById("nameTwo").value;
var nameThird=document.getElementById("nameThree").value;
var nameFourth=document.getElementById("nameFour").value;
var nameFifth=document.getElementById("nameFive").value;

document.getElementById("displayId").innerHTML="Stack: "+nameFirst+", "+nameSecond+", "+nameThird+", "+nameFourth+", "+nameFifth;
document.getElementById("searchId").style.color="#000000"
document.getElementById("searchId").style.backgroundColor="#bebebe"
}

var search=()=>{
var stackArray=[];
var cut=0;
stackArray.push(document.getElementById("nameOne").value);
stackArray.push(document.getElementById("nameTwo").value);
stackArray.push(document.getElementById("nameThree").value);
stackArray.push(document.getElementById("nameFour").value);
stackArray.push(document.getElementById("nameFive").value);
var searchName=prompt("Enter the name you want to search in stack");
for(var num=0;num<stackArray.length;num++){
	if(searchName===stackArray.pop())
		{
			alert("Name is present in stack");
			cut++;
			break;
		}
}
			if(cut==0)
			alert("Error!!! Name is not here in stack");

document.getElementById("displayId").innerHTML="Stack: ";
document.getElementById("displayId").innerHTML=stackArray;

		
document.getElementById("searchId").disabled=true;
}