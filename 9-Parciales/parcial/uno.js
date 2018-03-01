//a parte de pedir la base, hay q pedir la altura de un triangulo equilatero. informar el perimetro y la superficie.

function Mostrar()
{

	var base;

	base = document.getElementById("laBase").value;

	base = parseInt(base);

	var altura;

	altura = prompt("Cual es la altura?");

	altura = parseInt(altura);

	var perimetro;

	var superficie;

	perimetro = base*3;

	superficie = (base*altura)/2;

	alert("El perimetro es " + perimetro + " metros, y la superficie es " + superficie + " metros.")
		



}




/*var base;

	base = document.getElementById('laBase').value;

	base = parseInt(base);

	var perimetro = base*4;

	alert(perimetro);*/