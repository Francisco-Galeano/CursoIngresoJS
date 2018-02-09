/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;

	var numeroDos;
	
	numeroUno = document.getElementById("numeroUno").value;
	
	numeroDos = document.getElementById("numeroDos").value;

	numeroUno = parseInt(numeroUno);
	
	numeroDos = parseInt(numeroDos);

	var suma = numeroUno + numeroDos;

	alert(suma);

}

function restar()
{
	var numeroUno;

	var numeroDos;
	
	numeroUno = document.getElementById("numeroUno").value;
	
	numeroDos = document.getElementById("numeroDos").value;

	numeroUno = parseInt(numeroUno);
	
	numeroDos = parseInt(numeroDos);

	var resta = numeroUno - numeroDos;

	alert(resta);
}

function multiplicar()
{ 
	var numeroUno;

	var numeroDos;
	
	numeroUno = document.getElementById("numeroUno").value;
	
	numeroDos = document.getElementById("numeroDos").value;

	numeroUno = parseInt(numeroUno);
	
	numeroDos = parseInt(numeroDos);

	var multiplicacion = numeroUno * numeroDos;

	alert(multiplicacion);	
}

function dividir()
{
	var numeroUno;

	var numeroDos;
	
	numeroUno = document.getElementById("numeroUno").value;
	
	numeroDos = document.getElementById("numeroDos").value;

	numeroUno = parseInt(numeroUno);
	
	numeroDos = parseInt(numeroDos);

	var division = numeroUno / numeroDos;

	alert(division);
}

