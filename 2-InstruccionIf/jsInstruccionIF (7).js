function Mostrar()
{

	var edad;

	var estadoCivil;

	edad = document.getElementById('edad').value;

	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadoCivil != "Soltero"){

		alert("Es muy pequeño para NO estar soltero.");
	}
//tomo la edad  

	


}//FIN DE LA FUNCIÓN