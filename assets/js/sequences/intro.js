"use strict";

function startIntro() {
	messages = ["Bonjour, quelle belle journée n'est-ce pas ?",
		    "Voulez-vous jouer à un jeu ?",
		    "Très bien, laissez moi vous expliquer les règles !",
		    "Il y a ici 4 dés, le but du jeu c'est que la somme des numéros tirés soit la plus proche de la valeur annoncée.",
		    "Mais ce n'est pas aussi facile, il faut pour cela choisir le nombre de dés à lancer, cela vous permettra d'optimiser vos chances de réussite.",
	     	    "Celui d'entre nous deux qui sera le plus proche gagne.",
		    "On commence ?"];

	messageIndex = 0;

	isShowingPassIcon = true;
	canvas.addEventListener("click", () => nextMessage(startTrySequence));
	nextMessage();
}
