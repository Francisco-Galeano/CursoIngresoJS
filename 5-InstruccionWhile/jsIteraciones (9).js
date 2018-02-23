function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';

		while(respuesta!='no'){

			contador = contador + 1;
			numero = prompt("Ingrese un número");
			numero = parseInt(numero);

			while(isNaN(numero)){

			numero = prompt("Por favor, ingrese un número.");
			numero = parseInt(numero);

			}

			respuesta = prompt("Desea continuar?");

			if(contador){

				minimo = numero;
				maximo = numero;

			}

		

			


		
	
	}


document.getElementById('maximo').value = maximo;
document.getElementById('minimo').value = minimo;

}//FIN DE LA FUNCIÓN