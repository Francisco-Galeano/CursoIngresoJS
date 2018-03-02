//con if(). ingresar 3 numeros, mostrar el mayor.


function Mostrar()
{

	var primerNum;
	var segundoNum;
	var tercerNum;

	primerNum = prompt("Primer numero");
	primerNum = parseInt(primerNum);
	segundoNum = prompt("Segundo numero");
	segundoNum = parseInt(segundoNum);
	tercerNum = prompt("Tercer numero");
	tercerNum = parseInt(tercerNum);

	var mayor = 0;
	

	if(primerNum > mayor && primerNum > segundoNum){

		mayor = primerNum;
	}
	else{

		if(primerNum < segundoNum && segundoNum > tercerNum){

			mayor = segundoNum;
		}
		else{
			mayor = tercerNum;		
		}
	
	}

	alert(mayor);






}



	/*var dia;
	dia = prompt("Qué día es hoy?");

	switch(dia){

		case "Sábado":
			alert("Es fin de semana!");
			break;

		case "Domingo":
			alert("Es fin de semana!")
			break;

		default:
			alert("A trabajar!");
			break;



	}*/

