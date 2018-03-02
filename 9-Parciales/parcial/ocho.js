/*pedir 3 datos hasta q el cliente quiera
los datos son: nombre del animal, peso del animal(q sea mayor a 0) y temperatura del habitat del animal
(entre -40 y 40). 
informar 
el nombre del animal mas pesado. 
el nombre del animal de la temperatura mas baja.
la cantidad de temperatura pares que se ingresaron.
el promedio del peso de todos los animales.
la temperatura maxima y la temperatura minima.*/



function Mostrar()
{

	var nombreDelAnimal;
	var pesoDelAnimal;
	pesoDelAnimal = parseInt(pesoDelAnimal);
	var temperaturaDelHabitat;
	temperaturaDelHabitat = parseInt(temperaturaDelHabitat);
	var continuarPreguntando;
	var nombreAnimalConMasPeso;
	var animalConHabitatMasFrio;
	var temperarasPares;
	var promedioDePesos;
	var maximaTemperatura;
	var minimaTermperatura;
	var contador;
	contador = 0;

	
	continuarPreguntando = "si";

	while(continuarPreguntando == "si"){

		contador = contador + 1;
		nombreDelAnimal = prompt("Nombre de su mascota.");
		while(!(isNaN(nombreDelAnimal))){
			nombreDelAnimal = prompt("Por favor, ingrese un nombre valido.");
		}
		pesoDelAnimal = prompt("Peso de su mascota.");
		pesoDelAnimal = parseInt(pesoDelAnimal);
		while(isNaN(pesoDelAnimal) || pesoDelAnimal < 0){
			pesoDelAnimal = prompt("Por favor, ingrese un peso valido.");
			pesoDelAnimal = parseInt(pesoDelAnimal);
		}

		/*aca puedo trabajar con el peso
		si cantidad de aniameles ==1, ese peso es el maximo y el minimo
		guardo el nombre y el peso mas pesado
		else{
		si 1ra vez == max y minimo, si no es la 1ra vez, verifico peso maximo y minimo
		}

		*/



		temperaturaDelHabitat = prompt("Temperatura del habitat donde su animal reside.", "Recuerde: entre -40 y 40");
		temperaturaDelHabitat = parseInt(temperaturaDelHabitat);
		while(isNaN(temperaturaDelHabitat) || temperaturaDelHabitat < (-40) || temperaturaDelHabitat > 40){
			temperaturaDelHabitat = prompt("Por favor, ingrese una temperatura valida.");
			temperaturaDelHabitat = parseInt(temperaturaDelHabitat);
		}

		/*aca puedo trabahar con las temperaturas
		si la cantidade de animales es ==1, la temperatura es la maxima y la minima
		guardo el nombre yu el peso mas pesado
		else{
		si 1ra vez == max y minimo, si no es la 1ra vez, verifico temp maxima y minima
		}



		*/




		continuarPreguntando = prompt("Desea ingresar la informacion de otra mascota?");


	}

	//if(pesoDelAnimal )

	/*





	*/





}
