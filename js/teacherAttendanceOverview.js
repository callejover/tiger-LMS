var students = [
  {name:"Maria Johansson", class:"A", attendance:"88%"},
  {name:"Margareta Karlsson", class:"A", attendance:"56%"},
  {name:"Elisabeth Nilsson", class:"A", attendance:"43%"},
  {name:"Eva Eriksson", class:"A", attendance:"96%"},
  {name:"Erik Johansson", class:"A", attendance:"56%"},
  {name:"Lars Andersson", class:"A", attendance:"77%"},
  {name:"Christina Jonsson", class:"A", attendance:"88%"},
  {name:"Carl Persson", class:"A", attendance:"84%"},
  {name:"Gunnar Bengtsson", class:"A", attendance:"68%"},
  {name:"Hans Pettersson", class:"A", attendance:"58%"},
  {name:"Per Larsson", class:"A", attendance:"19%"},
  {name:"Johan Eriksson", class:"A", attendance:"44%"},
  {name:"Hans Pettersson", class:"A", attendance:"38%"},
  {name:"Ingrid Pettersson", class:"A", attendance:"78%"},
  {name:"Kristina Larsson", class:"A", attendance:"90%"},
  {name:"Lennart Jonsson", class:"A", attendance:"50%"},

  {name:"Maria Johansson", class:"A", attendance:"56%"},
  {name:"Margareta Karlsson", class:"A", attendance:"88%"},
  {name:"Elisabeth Nilsson", class:"A", attendance:"95%"},
  {name:"Eva Eriksson", class:"A", attendance:"88%"},
  {name:"Erik Johansson", class:"A", attendance:"56%"},
  {name:"Lars Andersson", class:"A", attendance:"95%"},
  {name:"Christina Jonsson", class:"A", attendance:"39%"},
  {name:"Per Larsson", class:"A", attendance:"95%"},
  {name:"Johan Eriksson", class:"A", attendance:"88%"},
  {name:"Hans Pettersson", class:"A", attendance:"56%"},
  {name:"Ingrid Pettersson", class:"A", attendance:"72%"},
  {name:"Kristina Larsson", class:"A", attendance:"56%"},
  {name:"Lennart Jonsson", class:"A", attendance:"95%"},

  {name:"Maria Johansson", class:"A", attendance:"95%"},
  {name:"Margareta Karlsson", class:"A", attendance:"72%"},
  {name:"Elisabeth Nilsson", class:"A", attendance:"39%"},
  {name:"Eva Eriksson", class:"A", attendance:"88%"},
  {name:"Erik Johansson", class:"A", attendance:"95%"},
  {name:"Lars Andersson", class:"A", attendance:"72%"},
  {name:"Christina Jonsson", class:"A", attendance:"39%"},
  {name:"Carl Persson", class:"A", attendance:"72%"},
  {name:"Gunnar Bengtsson", class:"A", attendance:"88%"},
  {name:"Hans Pettersson", class:"A", attendance:"95%"},
  {name:"Per Larsson", class:"A", attendance:"39%"},

   {name:"Maria Johansson", class:"B", attendance:"88%"},
   {name:"Margareta Karlsson", class:"B", attendance:"56%"},
   {name:"Elisabeth Nilsson", class:"B", attendance:"43%"},
   {name:"Eva Eriksson", class:"B", attendance:"96%"},
   {name:"Erik Johansson", class:"B", attendance:"56%"},
   {name:"Lars Andersson", class:"B", attendance:"77%"},
   {name:"Christina Jonsson", class:"B", attendance:"88%"},
   {name:"Carl Persson", class:"B", attendance:"84%"},
   {name:"Gunnar Bengtsson", class:"B", attendance:"68%"},
   {name:"Hans Pettersson", class:"B", attendance:"58%"},
   {name:"Per Larsson", class:"B", attendance:"19%"},
   {name:"Johan Eriksson", class:"B", attendance:"44%"},
   {name:"Hans Pettersson", class:"B", attendance:"38%"},
   {name:"Ingrid Pettersson", class:"B", attendance:"78%"},
   {name:"Kristina Larsson", class:"B", attendance:"90%"},
   {name:"Lennart Jonsson", class:"B", attendance:"50%"},

   {name:"Maria Johansson", class:"B", attendance:"56%"},
   {name:"Margareta Karlsson", class:"B", attendance:"88%"},
   {name:"Elisabeth Nilsson", class:"B", attendance:"95%"},
   {name:"Eva Eriksson", class:"B", attendance:"88%"},
   {name:"Erik Johansson", class:"B", attendance:"56%"},
   {name:"Lars Andersson", class:"B", attendance:"95%"},
   {name:"Christina Jonsson", class:"B", attendance:"39%"},
   {name:"Per Larsson", class:"B", attendance:"95%"},
   {name:"Johan Eriksson", class:"B", attendance:"88%"},
   {name:"Hans Pettersson", class:"B", attendance:"56%"},
   {name:"Ingrid Pettersson", class:"B", attendance:"72%"},
   {name:"Kristina Larsson", class:"B", attendance:"56%"},
   {name:"Lennart Jonsson", class:"B", attendance:"95%"},

   {name:"Maria Johansson", class:"B", attendance:"95%"},
   {name:"Margareta Karlsson", class:"B", attendance:"72%"},
   {name:"Elisabeth Nilsson", class:"B", attendance:"39%"},
   {name:"Eva Eriksson", class:"B", attendance:"88%"},
   {name:"Erik Johansson", class:"B", attendance:"95%"},
   {name:"Lars Andersson", class:"B", attendance:"72%"},
   {name:"Christina Jonsson", class:"B", attendance:"39%"},
   {name:"Carl Persson", class:"B", attendance:"72%"},
   {name:"Gunnar Bengtsson", class:"B", attendance:"88%"},
   {name:"Hans Pettersson", class:"B", attendance:"95%"},
   {name:"Per Larsson", class:"B", attendance:"39%"},

   {name:"Maria Johansson", class:"C", attendance:"88%"},
   {name:"Margareta Karlsson", class:"C", attendance:"56%"},
   {name:"Elisabeth Nilsson", class:"C", attendance:"43%"},
   {name:"Eva Eriksson", class:"C", attendance:"96%"},
   {name:"Erik Johansson", class:"C", attendance:"56%"},
   {name:"Lars Andersson", class:"C", attendance:"77%"},
   {name:"Christina Jonsson", class:"C", attendance:"88%"},
   {name:"Carl Persson", class:"C", attendance:"84%"},
   {name:"Gunnar Bengtsson", class:"C", attendance:"68%"},
   {name:"Hans Pettersson", class:"C", attendance:"58%"},
   {name:"Per Larsson", class:"C", attendance:"19%"},
   {name:"Johan Eriksson", class:"C", attendance:"44%"},
   {name:"Hans Pettersson", class:"C", attendance:"38%"},
   {name:"Ingrid Pettersson", class:"C", attendance:"78%"},
   {name:"Kristina Larsson", class:"C", attendance:"90%"},
   {name:"Lennart Jonsson", class:"C", attendance:"50%"},

   {name:"Maria Johansson", class:"C", attendance:"56%"},
   {name:"Margareta Karlsson", class:"C", attendance:"88%"},
   {name:"Elisabeth Nilsson", class:"C", attendance:"95%"},
   {name:"Eva Eriksson", class:"C", attendance:"88%"},
   {name:"Erik Johansson", class:"C", attendance:"56%"},
   {name:"Lars Andersson", class:"C", attendance:"95%"},
   {name:"Christina Jonsson", class:"C", attendance:"39%"},
   {name:"Per Larsson", class:"C", attendance:"95%"},
   {name:"Johan Eriksson", class:"C", attendance:"88%"},
   {name:"Hans Pettersson", class:"C", attendance:"56%"},
   {name:"Ingrid Pettersson", class:"C", attendance:"72%"},
   {name:"Kristina Larsson", class:"C", attendance:"56%"},
   {name:"Lennart Jonsson", class:"C", attendance:"95%"},

   {name:"Maria Johansson", class:"C", attendance:"95%"},
   {name:"Margareta Karlsson", class:"C", attendance:"72%"},
   {name:"Elisabeth Nilsson", class:"C", attendance:"39%"},
   {name:"Eva Eriksson", class:"C", attendance:"88%"},
   {name:"Erik Johansson", class:"C", attendance:"95%"},
   {name:"Lars Andersson", class:"C", attendance:"72%"},
   {name:"Christina Jonsson", class:"C", attendance:"39%"},
   {name:"Carl Persson", class:"C", attendance:"72%"},
   {name:"Gunnar Bengtsson", class:"C", attendance:"88%"},
   {name:"Hans Pettersson", class:"C", attendance:"95%"},
   {name:"Per Larsson", class:"C", attendance:"39%"}
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

