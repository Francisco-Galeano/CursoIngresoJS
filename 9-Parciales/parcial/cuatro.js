/*ingresamos dos numeros. si son iguales, los concatenamos. si el primero es mayor que el segundo, los multiplicamos. si el primero es
menor que el segundo, los restamos.*/


function Mostrar()
{

	var primerNumero;
	var segundoNumero;
	var concatenar;
	var multiplicacion;
	var resta;

	primerNumero = prompt("Ingrese el primer número");
	segundoNumero = prompt("Ingrese el segundo número");
	concatenar = primerNumero + segundoNumero;
	multiplicacion = parseInt(primerNumero) * parseInt(segundoNumero);
	resta = parseInt(primerNumero) - parseInt(segundoNumero);

	if(primerNumero == segundoNumero){

		
		document.write(concatenar);

	}
	else{

		if(primerNumero > segundoNumero){

			
			document.write(multiplicacion);

		}
		else{

			document.write(resta);

		}

	}

}


	
	

	

	





	


/*var primerNumero;
	var	segundoNumero;
	var multiplicacion;
	var suma;
	var resta;

	primerNumero = prompt("Primer número", "Ejemplo: 1000");
	segundoNumero = prompt("Segundo número", "Ejemplo: 500");
	multiplicacion = parseInt(primerNumero) * parseInt(segundoNumero);
	suma = parseInt(primerNumero) + parseInt(segundoNumero);
	resta = parseInt(primerNumero) - parseInt(segundoNumero);


	if(primerNumero == segundoNumero){

				document.write(multiplicacion);

	}
	else{

		if(primerNumero > segundoNumero){

			document.write(resta);

		}
		else{

			document.write(suma);
				
			}

			

		}*/