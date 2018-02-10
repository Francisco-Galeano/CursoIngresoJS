function Mostrar()
{
	var largo;

	var ancho;

	largo = document.getElementById('alrgo').value;

	ancho = document.getElementById("ancho").value;

	largo = parseInt(largo);

	ancho = parseInt(ancho);

	var perimetro;

	perimetro = largo*2 + ancho*2;

	var alambre;

	alambre = perimetro*(3);

	alert("Tu terreno tiene un perímetro de " + perimetro + " metros. La cantidad de alambre necesaria es " + alambre + " metros.");





}
