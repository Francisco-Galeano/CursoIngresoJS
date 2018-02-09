function Mostrar()
{
  var importe;

  importe = prompt("Ingrese aquí el precio del producto", "Ejemplo: $100");

  var iva;

  iva = importe*(1.21);

  document.getElementById('importeFinal').value = iva;


}
