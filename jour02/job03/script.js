var counter = 0;

document.getElementById("button").addEventListener("click", function addone() {

	counter ++;
	document.getElementById("compteur").textContent = counter;

});