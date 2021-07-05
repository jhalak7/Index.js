var count=0;
var arrayList=["Python",".Net"];
function addNode(){
  var li = document.createElement("li");
  var t = document.createTextNode(arrayList[count]);
  li.appendChild(t);
    document.getElementById("unList").appendChild(li);
    count++;
    if(count==2)
    	document.getElementById("addButton").disabled=true;
}