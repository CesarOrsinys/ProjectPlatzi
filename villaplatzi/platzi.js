var vp= document.getElementById("villaplatzi");
var pool = vp.getContext("2d");


var background = {
	url: "tile.png",
	loadOk: false
};
var cow = {
	url: "vaca.png",
	loadOk: false
};
var pig = {
	url: "cerdo.png",
	loadOk: false
};
var chicken = {
	url: "pollo.png",
	loadOk: false
};


//FONDO
background.image = new Image();
background.image.src = background.url;
background.image.addEventListener("load", loadBackground);

//VACA
cow.image = new Image();
cow.image.src = cow.url;
cow.image.addEventListener("load", loadCow);

//CERDO
pig.image = new Image();
pig.image.src = pig.url;
pig.image.addEventListener("load", loadPig);

//POLLO
chicken.image = new Image();
chicken.image.src = chicken.url;
chicken.image.addEventListener("load", loadChicken);


function loadBackground()
{
	background.loadOk = true;
	draw();
}
function loadCow()
{
	cow.loadOk = true;
	draw();
}
function loadPig()
{
	pig.loadOk = true;
	draw();
}
function loadChicken()
{
	chicken.loadOk = true;
	draw();
}

function draw()
{
	if (background.loadOk)
	{
		pool.drawImage(background.image,0,0);
	}
	if (cow.loadOk)
	{
		var q = aleatorio(0,10);
		for (var cw=0;cw<q; cw++)
		{
		var x = aleatorio (0,5);
		var y = aleatorio (0,5);
		var xa = x * 80;
		var ya = y * 80;
		pool.drawImage(cow.image,xa,ya);
		}
	}
	if (pig.loadOk)
	{
		var q = aleatorio(0,6);
		for (p=0;p<q;p++)
		{
		var x = aleatorio (0,5);
		var y = aleatorio (0,5);
		var xa = x * 80;
		var ya = y * 80;
		pool.drawImage(chicken.image,xa,ya);
		}
	}
	if (chicken.loadOk)
	{
		var q = aleatorio(0,10);
		for (c=0;c<q;c++)
		{
		var x = aleatorio (0,5);
		var y = aleatorio (0,5);
		var xa = x * 80;
		var ya = y * 80;
		pool.drawImage(pig.image,xa,ya);
		}
	}

}

function aleatorio(min,max)
{
	var result;
	result = Math.floor(Math.random()*(max-min+1))+min;
	return result
}