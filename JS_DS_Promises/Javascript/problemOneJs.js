
class Node { 
	constructor(element) 
	{ 
		this.element = element; 
		this.next = null
	} 
}  
class LinkedList { 
	constructor() 
	{ 
		this.head = null; 
		this.size = 0; 
	} 
addElement(element) 
{  
	var node = new Node(element); 
 
	var current; 

	if (this.head == null) 
		this.head = node; 
	else { 
		current = this.head; 

		while (current.next) { 
			current = current.next; 
		} 
 
		current.next = node; 
	} 
	this.size++; 
}
printList() 
{ 
    var curr = this.head; 
    var str = "Salaries in ascending order: "; 
    while (curr) { 
        str += curr.element + ", "; 
        curr = curr.next; 
    } 
    return str;
} 

} 

function addList(){
	var addArray=[""];
	addArray.push(document.getElementById("empOneId").innerHTML);
	addArray.push(document.getElementById("empTwoId").innerHTML);
	addArray.push(document.getElementById("empThreeId").innerHTML);
	addArray.push(document.getElementById("empFourId").innerHTML);
	addArray.push(document.getElementById("empFiveId").innerHTML);

	addArray.sort();

	var listLink=new LinkedList();
	for(var num=0;num<addArray.length;num++)
	listLink.addElement(addArray[num]);
	document.getElementById("sortedId").innerHTML=listLink.printList();
}