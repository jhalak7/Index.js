function fetchData(){ 
	document.getElementById("ajaxButton").innerHTML="Loading...";
	document.getElementById("ajaxButton").disabled=true;
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
  	if(this.status==429)
  		alert("Too many requests");
    if (this.readyState == 4 && this.status == 200) {
      var parsedData=JSON.parse(this.responseText);
	var table="<tr><th>Emp-Id</th><th>Emp-Name</th><th>Emp-Salary</th><th>Emp-Age</th></tr>";

  	var info = parsedData.data;
  	for (i = 0; i <info.length; i++) { 
    table += "<tr><td>" +
    info[i].id +
    "</td><td>" +
    info[i].employee_name +
    "</td><td>" +
    info[i].employee_salary +
    "</td><td>" +
    info[i].employee_age+
    "</td></tr>";
 		 }
  	document.getElementById("insertHereId").innerHTML = table;

    }
  };
  httpRequest.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);
  httpRequest.send();

}

	document.getElementById("ajaxButton").innerHTML=" ";