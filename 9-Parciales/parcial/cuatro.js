function Mostrar()
{

	var primerNumero;
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

			

		}

	

}
