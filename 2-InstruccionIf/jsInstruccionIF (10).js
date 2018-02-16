function Mostrar()
{

	var notaExamen;
	//var notaFinal;

	notaExamen = Math.round(Math.random()*10);
	//notaFinal = Math.round(notaExamen);

	if(notaExamen > 8){

		alert("Excelente! Su nota es " + notaExamen + "." );

	}
	else{

		if(notaExamen > 3){

			alert("Aprobado. Su nota es " + notaExamen + "." );
		}
		else{

			alert("Vamos, la proxima se puede. Su nota es " + notaExamen + "." );

		}

	}





	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN