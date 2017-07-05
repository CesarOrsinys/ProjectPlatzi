var oKeys = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};
console.log(oKeys);

document.addEventListener("keydown", canvasK);
	var oQuader = document.getElementById("areaDraw");
	var paper = oQuader.getContext("2d");

	dibujarLinea("red", 100, 100, 200, 200, paper);
	
	function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal,lienzo)
	{
		lienzo.beginPath();
		lienzo.strokeStyle = color;
		lienzo.moveTo(xinicial,yinicial);
		lienzo.lineTo(xfinal,yfinal);
		lienzo.stroke();
		lienzo.closePath();	
	}

	function canvasK(oEvent)
	{
		switch (oEvent.keyCode) 
		{
			case oKeys.UP:
			console.log("PARRIBA");
			break;
			case oKeys.DOWN:
			console.log("PABAJO");
			break;
			case oKeys.RIGHT:
			console.log("PAUNLAO");
			break;
			case oKeys.LEFT:
			console.log("PALOTROLAO");
			break;
		}
	}