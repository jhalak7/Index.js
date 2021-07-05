function getData(){
	var httpReq=new XMLHttpRequest();
  httpReq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var response=JSON.parse(this.responseText);
  document.getElementById("valueUserId").value=response.userId;
  document.getElementById("valueTitle").value=response.title;
  document.getElementById("valueCompleted").value=response.completed;
    }
  };
  httpReq.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  httpReq.send();
}