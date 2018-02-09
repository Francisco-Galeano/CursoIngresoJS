/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;

	importe = document.getElementById('importe').value;

	importe = parseInt(importe);

	var descuento;

	descuento = importe/100*75;

	document.getElementById("resultado").value = descuento;

}
