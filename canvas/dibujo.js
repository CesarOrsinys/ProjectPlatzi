/*Variables de Funcionalidad*/
var btnSend = document.getElementById("btnEnviar");
var txtLine = document.getElementById("txtLineas");
btnSend.addEventListener("click", dibujoPorClick);

/*Variables del Lienzo*/
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

/*Traza las Lineas*/
function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal)
	{
		lienzo.beginPath();
		lienzo.strokeStyle = color;
		lienzo.moveTo(xinicial,yinicial);
		lienzo.lineTo(xfinal,yfinal);
		lienzo.stroke();
		lienzo.closePath();	
	}

/*Click click click lick*/
function dibujoPorClick()
{
	var lineas=parseInt(txtLine.value);
	var l=0;
	var yi, xf;
	var colorcito="#f2d118";
	var espacio = ancho / lineas;

	/*Ciclo For para Multiples Lienas*/
	for (l=0; l < lineas; l++)
		{
			yi= espacio * l;
			xf = espacio * (l+1);
			dibujarLinea (colorcito, 0,yi,xf,300);
			console.log("linea " + l);
		}

	/*Recoloreado de las lineas*/
	dibujarLinea(colorcito, 1, 1, 1, 299);
	dibujarLinea(colorcito, 1, 299, 299, 299);

}