var imagenes = [];
	imagenes["50"] = "billete50.png";
	imagenes["20"] = "billete20.png";
	imagenes["10"] = "billete10.png";
class Billete 
	{
		constructor(v,c){
		this.valor = v;
		this.cantidad = c;
		this.imagen = new Image();
		this.imagen.src = imagenes[this.valor];
		}
	}

var caja = [];

var papeles = 0;
var dinero = 0;
var div= 0;
var t = document.getElementById("dinero");
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
caja.push(new Billete("50","3"));
caja.push(new Billete("20","2"));
caja.push(new Billete("10","2"));
b.addEventListener("click", entregarDinero);


function entregarDinero()
{
var dineroTotal = 0;
	for (x=0;x<caja.length;x++)
	{
		dineroTotal += (caja[x].valor * caja[x].cantidad);
		
	}
	var entregado = [];
	resultado.innerHTML = '';
	dinero = parseInt(t.value);
	if (dinero>dineroTotal)
	{
		resultado.innerHTML = "Transacción Invalidad, Fondo del Cajero Insuficiente";
	}
	else{


	for (var bi of caja)
	{
		if (dinero>0)
		{
			div=Math.floor(dinero/bi.valor);
				if (div>bi.cantidad)
				{
					papeles=bi.cantidad;
				}
				else
				{
					papeles=div;
				}
			entregado.push(new Billete(bi.valor,papeles))
			dinero = dinero - (bi.valor*papeles);
			bi.cantidad = bi.cantidad - papeles;
		}
	}
	  	if(dinero > 0)
		{
			resultado.innerHTML = "Transacción Invalidad, Fondo del Cajero Insuficiente";
		}
 		else
 			{
    			for(var e of entregado)
    				{
      					if(e.cantidad > 0)
      						{
            					resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + " <img src=" + e.imagen.src + " />" + "<br />";
      						}
		   			}
			}
		}
}