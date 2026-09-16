const x = 1
function load() {
	document.getElementById("bod").style.backgroundColor = "#ffffff";
}
function coolMaster() {
	document.getElementById("gameVisualTxt").innerHTML = "You are in a wooded mountainscape, high above where most dare explore.";
	document.getElementById("goonUno").style.display = "block";
	document.getElementById("gameVisualTxt2").innerHTML = "Go Back to civilization, or stay? Type C for civilization, and S to stay.";
}
function play() {
	if (document.getElementById("goon").value.toLowerCase() === "s") {
		document.getElementById("gameVisualTxt").innerHTML = "You stay and find some food. ";
		document.getElementById("gameVisualTxt2").innerHTML = "Eat, or  save? (E/S)";
		document.getElementById("Play1A").style.display = "none";
		document.getElementById("play2A").style.display = "block";
	}
	else if (document.getElementById("goon").value.toLowerCase() === "c") {
		document.getElementById("gameVisualTxt").innerHTML = "You die on the way back to where you think a town is.";
		document.getElementById("gameVisualTxt2").innerHTML = "Good try!";
	}
	else {
		document.getElementById("gameVisualTxt").innerHTML = "Invalid input.";
		document.getElementById("gameVisualTxt2").innerHTML = "";

	}
}
function play2() {
	if (document.getElementById("goon").value.toLowerCase() === "s") {
		document.getElementById("gameVisualTxt").innerHTML = "you die of starvation.";
		document.getElementById("gameVisualTxt2").innerHTML = "good run!";
	}
	else if (document.getElementById("goon").value.toLowerCase() === "e") {
		document.getElementById("gameVisualTxt").innerHTML = "You get rescued by a helicopter!";
		document.getElementById("gameVisualTxt2").innerHTML = "Good game!";
	}
	else {
		document.getElementById("gameVisualTxt").innerHTML = "Invalid input.";
		document.getElementById("gameVisualTxt2").innerHTML = "";

	}
}
