	//Danny Kamman
	//Opdracht: Pizza Calculator
//Deze costanten bewaren de prijzen van de pizza's
const SMALLPRICE 	= 500 ;
const MEDIUMPRICE 	= 750;
const LARGEPRICE 	= 1300;


//de tekst staat in dubbele aanhalingstekings omdat anders de apostrof bij pizza's niet geaccepteert word.
//Deze var waardes bewaren de hoeveelhied gekozen pizza's:
window.alert("Welkom op Panuchi's Pizza's bezorg site.\nSelecteer na dit scherm de hoeveelheid pizza's naar voorkeur.");
var small 	= prompt("Typ hier de hoeveelheid Small pizza's naar voorkeur.\nSmall pizza's zijn 22cm in doorsnee en 5 euro per stuk.");
var medium 	= prompt("Typ hier de hoeveelheid Medium pizza's naar voorkeur.\nMedium pizza's zijn 26cm in doorsnee en 7,50 euro per stuk.");
var large 	= prompt("Typ hier de hoeveelheid Large pizza's naar voorkeur.\nLarge pizza's zijn 30cm in doorsnee en 13 euro per stuk.");

//Deze var waardes berekenen de prijs keer de hoeveelheid gekozen pizza's:
var totSmall 	= (SMALLPRICE / 100) * small;
var totMedium 	= (MEDIUMPRICE / 100) * medium;
var totLarge 	= (LARGEPRICE / 100) * large
var totSub 		= totLarge + totMedium + totSmall

//Dit weergeeft de uitgerekende prijzen per pizza keuze en het totale van alle gekozen pizza's
document.write("Dank u wel voor het gebruik maken van onze Pizza service bij Panuchi's Pizza's.");
document.write("<br>" + "<br>" + "Uw keuze." + 
						   "<br>" + "Small Pizza's €5 (22cm): " 	+ small 	+ "<br>" + " Kosten: €" + totSmall.toFixed(2)
				+ "<br>" + "<br>" + "Medium Pizza's €7,50 (26cm): " + medium 	+ "<br>" + "Kosten: €" 	+ totMedium.toFixed(2)
				+ "<br>" + "<br>" + "Large Pizza's €13 (30cm): " 	+ large 	+ "<br>" + "Kosten: €" 	+ totLarge.toFixed(2)
				+ "<br>" + "<br>" + "Subtotaal: €" + totSub.toFixed(2));



