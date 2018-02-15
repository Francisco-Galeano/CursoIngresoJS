function Mostrar()
{
	var edad;

	edad = document.getElementById('edad').value;

	if(edad < 13){

		alert("Eres un niño.");

	}

	else{

		if(edad > 17){

			alert("Ud es mayor de edad.");

		}

		else{

			alert("Sos un adolescente.");

		}

	}


}