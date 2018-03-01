//se ingresa un porcentaje de descuento y el importe. mostrar cuanto se debe pagar.


function Mostrar()
{
  
  var descuento;
  var importe;
  descuento = prompt("Ingrese aquí el descuento", "Ejemplo: 20%");
  descuento = parseInt(descuento);
  importe = prompt("Ingrese aquí el precio");
  importe = parseInt(importe);
  var importeFinal;
  importeFinal = importe - (importe/100)*descuento;
  document.getElementById("importeFinal").value = importeFinal;


}




/*var importe;

  importe = prompt("Ingrese aquí el precio del producto", "Ejemplo: $100");

  var iva;

  iva = importe*(1.21);

  document.getElementById('importeFinal').value = iva;*/