"use strict";

let choosenNumber;
let selectedDices;

let playerResult;

let aiNumberOfDices;
let aiResult;

function startTrySequence() {
	choosenNumber = randomInt(4, 24);

	messages = ["Très bien, le nombre tiré est " + choosenNumber + ".",
		    "Choisissez les dés que vous voulez lancer en cliquant dessus.",
		    "Très bien, maintenant cliquez sur chacun d'entre eux pour les lancer.",
		    "", // filled in the canvas's click listener
		    "C'est mon tour!",
		    "", // filled in the canvas's click listener
		    "",
		    "",
		    "Voulez-vous rejouer ?"];

	messageIndex = 0;
	
	canvas.addEventListener("click", () => {
	
		switch(messageIndex) {
			case 1:
				dices.forEach(dice => {
					dice.element.classList.add("selecting");
					dice.element.classList.remove("disabled");
				});
				break;
			case 2:
				selectedDices = document.querySelectorAll(".dice.selected");
	
				if(selectedDices.length <= 0) {
					messageIndex = 1;
					return;
				}

				document.querySelectorAll(".dice:not(.selected)").forEach(dice => dice.classList.add("disabled"));
				dices.forEach(dice => {
					dice.element.classList.remove("selecting");
					dice.element.classList.remove("selected");
				});
				break;
	
			case 3:
				playerResult = 0;
	
				if(document.querySelectorAll(".dice.validated").length < selectedDices.length) {
					messageIndex = 2;
					return;
				}

				dices.forEach(dice => {
					if(dice.element.classList.contains("validated"))
						playerResult += dice.state;
				});
				messages[3] = "Le total obtenu est de " + playerResult + ", vous êtes à " + ( Math.abs(choosenNumber - playerResult) ) + " du nombre choisi !";
				break;
			case 5:
				aiNumberOfDices = randomInt(1, 4);

				if(aiNumberOfDices === 1)
					messages[5] = "Je choisi 1 dé !";
				else
					messages[5] = "Je choisi " + aiNumberOfDices + " dés !";
				break;
			case 6:
				aiResult = 0;

				for(let i = 0; i < aiNumberOfDices; i++)
					aiResult += randomInt(1, 6);	
				messages[6] = "Cela me fait un total de " + aiResult + ", je suis à " + ( Math.abs(choosenNumber - aiResult) ) + " du nombre choisi !";
				break;
			case 7:
				let playerDifference = Math.abs(choosenNumber - playerResult);
				let aiDifference = Math.abs(choosenNumber - aiResult);

				if(playerDifference === aiDifference)
					messages[7] = "C'est une égalité !";
				else if(playerDifference < aiDifference)
					messages[7] = "Vous m'avez battu, bravo !";
				else
					messages[7] = "Je suis désolé, mais il semblerait que je vous ai battu...";

				dices.forEach(dice => {
					dice.element.classList.add("disabled");
					dice.validate(false);
				});
		}
	});
	nextMessage(startTrySequence);
}
