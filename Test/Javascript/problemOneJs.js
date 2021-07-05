var fetchData=() =>{ 
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if(this.status==429)
      alert("Too many requests");
    if (this.readyState == 4 && this.status == 200) {
      var parsedData=JSON.parse(this.responseText);
  var table="<tr><th>Emp-Id</th><th>Emp-Name</th><th>Emp-Salary</th><th>Emp-Age</th></tr>";
    var option="";
    var info = parsedData.data;
    for (num = 0; num <info.length; num++) { 
    table += "<tr><td>" +
    info[num].id +
    "</td><td>" +
    info[num].employee_name +
    "</td><td>" +
    info[num].employee_salary +
    "</td><td>" +
    info[num].employee_age+
    "</td></tr>";
    option+="<option>"+info[num].id+"</option>"

     }
    document.getElementById("insertHereId").innerHTML = table;
     document.getElementById("dropId").innerHTML=option;
     document.getElementById("textId").innerHTML="Select one Id from dropdown List";
     document.getElementById("dropId").onchange=function(){
      var idSelected=document.getElementById("dropId").value;
      idSelected--;
      var ans=prompt("Do you want to save these details into a cookie?yes/no");
      if(ans==="yes"){
        document.getElementById("setTwo").style.backgroundColor="red";
     document.cookie="id="+info[idSelected].id+", name="+info[idSelected].employee_name+", salary="+
     info[idSelected].employee_salary+", age="+info[idSelected].employee_age;
     document.getElementById("cookieShowId").innerHTML="cookie="+document.cookie;

        }
        else if(ans==="no"){
            alert("Thank you for your time");
        }
        else
          alert("Wrong input");
     }
    }
  };
  httpRequest.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);
  httpRequest.send();

}