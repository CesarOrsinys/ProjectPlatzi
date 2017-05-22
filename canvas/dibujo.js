var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas=30;
var l=0;
var yi, xf;

while (l<lineas)
{
	yi= 10 * l;
	xf = 10 * (l+1);
	dibujarLinea ("black", 300, yi, xf, 0);
	dibujarLinea ("#f2d118", 0,yi,xf,300);
	l++;
}
	dibujarLinea("#f2d118", 1, 1, 1, 300);
	dibujarLinea("#f2d118", 1, 299, 299, 299);
	dibujarLinea("black", 300, 300, 300, 1);
	dibujarLinea("black", 299, 1, 1, 1);
function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();	
}