var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(200,0);
lienzo.lineTo(400,400);
lienzo.lineTo(0,150);
lienzo.lineTo(400,150);
lienzo.lineTo(0,400);
lienzo.lineTo(200,0);

lienzo.stroke();
lienzo.closePath();