

function task() {
  var inputValue=[];
  var li = document.createElement("li");
  inputValue.push(document.getElementById("todo").value);
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("uno").appendChild(li);
  }
  document.getElementById("todo").value = "";
}

function display(){
  document.getElementById("uno").style.color="#000000";
}