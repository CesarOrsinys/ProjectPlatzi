var z;
	for (var i=0; i<10;i++)
	{
		z= aleatorio(5,0);
		document.write(z + " ,");
	}

function aleatorio(min,max)
{
	var result;
	result = Math.floor(Math.random()*(max-min+1))+min;
	return result
}