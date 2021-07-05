function swapElements(){
var child=document.getElementById("swapThis");
childValue=child.innerHTML;
child.parentNode.removeChild(child);
var listAdd=document.createElement("li");
var listText=document.createTextNode(childValue);
listAdd.appendChild(listText);
document.getElementById("addInThis").appendChild(listAdd);
}