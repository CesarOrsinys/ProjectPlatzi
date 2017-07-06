class Pakiman
	{
		constructor(nombre,life,attack)
		{
			this.imagen = new Image();
			this.name= nombre,
			this.life= life,
			this.attack= attack
			this.imagen.src = img[this.name]
		}
		talk()
		{
			alert(this.name);
		}
		show()
		{
			document.body.appendChild(this.imagen);
			document.write("<p>");
			document.write("<strong>" + this.name + "</strong>");
			document.write("<br />");
			document.write("Vida: " + this.life);
			document.write("<br />");
			document.write("Ataque: " + this.attack + "<hr/>");
			document.write("<br />");
			document.write("</p>");
		}

	}	