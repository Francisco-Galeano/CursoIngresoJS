/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	
 	var cantidadLamparas;
 	var precioLamparas;
 	var marcaLamparas;
 	//var importe;
 	var importeFinal;

 	
 	cantidadLamparas = document.getElementById("Cantidad").value;
 	cantidadLamparas = parseInt(cantidadLamparas);
 	precioLamparas = 35;
 	precioLamparas = parseInt(precioLamparas);
 	//importe = parseInt(importe);
 	//importeFinal = cantidadLamparas*precioLamparas;
 	marcaLamparas = document.getElementById("Marca").value;
 	importeFinal = parseInt(importeFinal);
 	document.getElementById("precioDescuento").value = importeFinal;	

 	
 	if(cantidadLamparas > 5){

		importeFinal = (cantidadLamparas*precioLamparas)*0.50;
		importeFinal = parseInt(importeFinal);
		document.getElementById("precioDescuento").value = importeFinal;

	}
	else{

		if(cantidadLamparas == 5 && marcaLamparas == "ArgentinaLuz"){

 				importeFinal = (cantidadLamparas*precioLamparas)*0.60;
 				importeFinal = parseInt(importeFinal);
 				document.getElementById("precioDescuento").value = importeFinal;

 			}
 			else{

 				if(cantidadLamparas == 5 && marcaLamparas != "ArgentinaLuz"){

 					importeFinal = (cantidadLamparas*precioLamparas)*0.70;
 					importeFinal = parseInt(importeFinal);
 					document.getElementById("precioDescuento").value = importeFinal;

 				}
 				else{

 					if(cantidadLamparas == 4 && marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas"){

 						importeFinal = (cantidadLamparas*precioLamparas)*0.75;
 						importeFinal = parseInt(importeFinal);
 						document.getElementById("precioDescuento").value = importeFinal;

 					}
 					else{

 						if(cantidadLamparas == 4 && marcaLamparas != "ArgentinaLuz" || marcaLamparas != "FelipeLamparas"){

 							importeFinal = (cantidadLamparas*precioLamparas)*0.80;
 							importeFinal = parseInt(importeFinal);
 							document.getElementById("precioDescuento").value = importeFinal;

 						}
 						else{

 							if(cantidadLamparas == 3 && marcaLamparas == "ArgentinaLuz"){

 								importeFinal = (cantidadLamparas*precioLamparas)*0.85;
 								importeFinal = parseInt(importeFinal);
 								document.getElementById("precioDescuento").value = importeFinal;

 							}
 							else{

 								if(cantidadLamparas == 3 && marcaLamparas == "FelipeLamparas"){

 									importeFinal = (cantidadLamparas*precioLamparas)*0.90;
 									importeFinal = parseInt(importeFinal);
 									document.getElementById("precioDescuento").value = importeFinal;

 								}
 								else{

 									if(cantidadLamparas == 3 && marcaLamparas != "ArgentinaLuz" || marcaLamparas != "FelipeLamparas"){

 									importeFinal = (cantidadLamparas*precioLamparas)*0.95;
 									importeFinal = parseInt(importeFinal);
 									document.getElementById("precioDescuento").value = importeFinal;

 								}
 							
 							}

 						}

 					}

 				}

 			}

 		}

 	}

 }
