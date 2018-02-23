function Mostrar()
{
	var numero;
	var contador=0;
	var positivo=0;
	var negativo=1;
	var acumulador;
	
	var respuesta='si';

	while(respuesta == "si"){

		contador = contador + 1;
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);
		//respuesta = prompt("Desea continuar?");
		//acumulador = contador + numero;

		while(isNaN(numero)){

			numero = prompt("Por favor, ingrese un número.");
			numero = parseInt(numero);

			}

			//contador = contador + 1;
			//numero = prompt("Ingrese un número");
			//numero = parseInt(numero);
			respuesta = prompt("Desea continuar?");
			//acumulador = contador + numero;

			if(numero > 0){

			positivo = positivo + numero;
			
			}
			else{

				if(numero < 0){

					negativo = negativo * numero;

				
				}
				

			}

		
		}

		




		document.getElementById('suma').value=positivo;
		document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN