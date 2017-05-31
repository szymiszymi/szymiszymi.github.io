function move() {
	var username = document.getElementById("username").value;
	var lootbox = document.getElementById("lootbox").value;
	var typ = document.getElementById("typ").value;
	if(username=="") {
		alert('Zapomniałeś wpisac numer GG');
		return false;
	}

	document.getElementById("fillup").style.display = "none";
	document.getElementById("progressbarcontainer").style.display = "block";
	var elem = document.getElementById("progressbar");
	var width = 10;
	var id = setInterval(frame, 100);
	function frame() {
		if (width > 0 && width < 10) {
			document.getElementById("progresslog").innerHTML = "Łączenie z serwerem...";
		}

		if (width > 10 && width < 20) {
			document.getElementById("progresslog").innerHTML = "Łączenie z serwerem... #2 ";
		}

		if (width > 20 && width < 30) {
			document.getElementById("progresslog").innerHTML = "Połączenie nawiązane.";
		}

		if (width > 30 && width < 40) {
			document.getElementById("progresslog").innerHTML = "Łącze z odpowiednim użytkownikiem.";
		}

		if (width > 40 && width < 50) {
			document.getElementById("progresslog").innerHTML = "Połączenie z "+username+" nawiązane.";
		}

		if (width > 60 && width < 70) {
			document.getElementById("progresslog").innerHTML = "Numer nadaje się do weryfikacji";
		}

		if (width > 80 && width < 90) {
			document.getElementById("progresslog").innerHTML = "Rozpoczynanie procesu weryfikacji";
		}

		if (width > 90 && width <= 91) {
			document.getElementById("progresslog").innerHTML = "Przetwarzanie";
		}

		if (width > 91 && width <= 92) {
			document.getElementById("progresslog").innerHTML = "Przetwarzanie.";
		}

		if (width > 92 && width <= 93) {
			document.getElementById("progresslog").innerHTML = "Przetwarzanie..";
		}

		if (width > 93 && width <= 94) {
			document.getElementById("progresslog").innerHTML = "Przetwarzanie...";
		}

		if (width > 94 && width <= 95) {
			document.getElementById("progresslog").innerHTML = "Przetwarzanie";
		}

		if (width > 95 && width <= 96) {
			document.getElementById("progresslog").innerHTML = "Przetwarzanie.";
		}

		if (width > 96 && width <= 97) {
			document.getElementById("progresslog").innerHTML = "Przetwarzanie..";
		}

	    if (width >= 99) {
	    	document.getElementById("progresslog").innerHTML = "Przetwarzanie...";
	    	setTimeout(verify, 1000);
			clearInterval(id);
	    } else {
			width++;
			elem.style.width = width + '%';
			document.getElementById("progressbarlabel").innerHTML = width * 1  + '%';
			}
	}
}

function verify() {

	document.getElementById("verifybg").style.height = "100%";

}

var randomnumber = setInterval(randomuser,6000)

function randomuser() {
document.getElementById("randomnumber").innerHTML = Math.floor(Math.random() * 3);
}