"use strict";

let choosenNumber;
let selectedDices;

function startTrySequence() {
	choosenNumber = randomInt(4, 24);

	messages = ["Très bien, le nombre tiré est " + choosenNumber + ".",
		    "Choisisez les dés que vous voulez lancer en cliquant dessus.",
		    "Maintenant, cliquer dessus pour les lancer."];

	messageIndex = 0;
	
	canvas.addEventListener("click", () => {
	
		nextMessage(console.log("hi"));
		
		if(messageIndex === 1)
			dices.forEach(dice => {
				dice.element.classList.add("selecting")
				dice.element.classList.remove("disabled");
			});
		else if(messageIndex === 2) {
			selectedDices = document.querySelector(".dice.selected");
			document.querySelector(".dice:not[.selected]").forEach(dice => dice.element.classList.add("disabled"));
			dices.forEach(dice => dice.element.classList.remove("selecting"));
		}
	});
	nextMessage()
}
