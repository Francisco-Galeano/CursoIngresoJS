function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var acumuladorNegativos;
	var acumuladorPositivos;
	var contadorNegativos = 0;
	var contadorPositivos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var diferencia;
	
	var respuesta="si";

	while(respuesta!="no"){

		if(numero < 0){

			contadorNegativos = contadorNegativos + 1;
			acumuladorNegativos = acumuladorNegativos + numero;
		
		}
		else{

			if(numero > 0){

				contadorPositivos = contadorPositivos + 1;
				acumuladorPositivos = acumuladorPositivos + numero;

			}
			else{

				if(numero == 0){

					contadorCeros = contadorCeros + 1;

				}

				if(numero / 2 == 0){

					contadorPares = contadorPares + 1;

				}

				
			}

		}
	}




}//FIN DE LA FUNCIÓN