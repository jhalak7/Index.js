

function fetchData(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open('GET', "https://dummy.restapiexample.com/api/v1/employees");
  req.onload = function() {
    if (req.status == 200) {
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

    var drope="";

for (var i=1; i <=info.length; i++)
{
drope+=("<option>" + i + "</option>");
}
  document.getElementById("dropEmp").innerHTML=drope;
  document.getElementById("dropEmp").onchange=function(){alert(info[document.getElementById("dropEmp").value-1].employee_name)}
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

