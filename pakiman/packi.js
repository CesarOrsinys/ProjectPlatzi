var img = [];
img["Cauchin"] = "vaca.png";
img["Pokacho"] = "pollo.png";
img["Tocinauro"] = "cerdo.png";
img["Pelusaurus"] = "perro.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin","1000","50"));
coleccion.push(new Pakiman("Pokacho","500","150"));
coleccion.push(new Pakiman("Tocinauro","1500","90"));
coleccion.push(new Pakiman("Pelusaurus","2000","80"));

console.log(coleccion);
for (var pakin of coleccion)
{
	pakin.show();
}