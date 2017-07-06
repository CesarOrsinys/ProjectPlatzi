var n=100;
for (var i = 1; i <= n; i++) 
	if(!(i % 3) && !(i % 5))
		document.write("Fizz Buzz <br \>");
	else if (isDv(i,3))
		document.write("Fizz <br \>");
	else if (isDv(i,5))
		document.write("Buzz <br \>");
	else
		document.write(i + "<br \>");

	function isDv (num,dv)
	{
		if (num % dv == 0)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}