function Mostrar()
{

	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta="si";

		while(respuesta == "si"){

			contador = contador + 1;
			numero = prompt("Ingrese un número");
			numero = parseInt(numero);
			respuesta = prompt("Para continuar escriba si");
			acumulador = acumulador + numero;

		}

		



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN