var students = [
	 {name:"Anton", class:"A", attendance:"65%"},
   {name:"William", class:"B", attendance:"35%"},
   {name:"Kalle", class:"A", attendance:"34%"},
   {name:"Tim", class:"B", attendance:"77%"},
   {name:"Robbin", class:"A", attendance:"90%"},
   {name:"Robba", class:"B", attendance:"95%"},
   {name:"Callé", class:"A", attendance:"29%"},
   {name:"Atnon", class:"B", attendance:"55%"},
   {name:"Rabarber", class:"A", attendance:"65%"},
   {name:"Hello", class:"B", attendance:"23%"},
   {name:"Kebab", class:"A", attendance:"86%"},
   {name:"Tim Arro", class:"B", attendance:"75%"},
   {name:"Rotete", class:"A", attendance:"93%"},
   {name:"Rebecca", class:"B", attendance:"72%"},
   {name:"Sara", class:"A", attendance:"71%"},
   {name:"Klara", class:"B", attendance:"88%"},
   {name:"Tobias", class:"B", attendance:"100%"},
   {name:"Christoffer", class:"A", attendance:"15%"},
   {name:"Kristian", class:"B", attendance:"76%"},
   {name:"Sebastian", class:"A", attendance:"43%"},
   {name:"Klementin", class:"B", attendance:"33%"},
   {name:"hejhej", class:"C", attendance:"88%"},
   {name:"hejhej", class:"C", attendance:"88%"},
   {name:"hejhej", class:"C", attendance:"88%"},
   {name:"hejhej", class:"C", attendance:"88%"},
   {name:"hejhej", class:"C", attendance:"88%"},
   {name:"hejhej", class:"C", attendance:"88%"},
   {name:"hejhej", class:"C", attendance:"88%"},
   


];

function createStudentRowElement(student){
	return "<tr><td><b>" + student.name + " </b></td><td>  " + student.attendance + " Närvaro </td></tr>";
}

function generateStudentList(){
	$.each(students, function(index, item){
  	if($("#ClassSelect").val() == item.class)
			$('.StudentListBody').append(createStudentRowElement(item));
	});
}

window.classChanged = function classChanged(){
	$('.StudentListBody').empty();
  generateStudentList();
}


//Code

generateStudentList();

var modal = document.getElementById('classModal');

// Get the button that opens the modal
var btn = document.getElementById("classAttendance");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
function closeAttendanceOverview() {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
