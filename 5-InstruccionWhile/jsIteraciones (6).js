function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var iteraciones=5;
	var promedio;

	while(contador < iteraciones){

		contador = contador + 1;
		contador = prompt("Ingrese un número");
		contador = parseInt(numero);
		acumulador = acumulador + contador;

	}

	promedio = acumulador / contador;
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN