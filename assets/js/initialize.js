"use strict";

let dices;

window.onload = function () {
	dices = new Array(4).fill().map((x, i) => {
		let dice = new Dice();

		dice.element.id = "dice" + i;
		dice.element.addEventListener("click", () => dice.roll(new Time(2, DurationType.SECOND)));
		document.querySelector("body").appendChild(dice.element);
	

		return dice;
	});
}

