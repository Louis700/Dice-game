"use strict";

let canvas;
let textBox;
let dices;

let controllingLoopTimeout;

window.onload = function () {
	dices = new Array(4).fill().map((x, i) => {
		let dice = new Dice();

		dice.element.id = "dice" + i;
		dice.element.classList.add("disabled");
	
		// Handle dice's click event
		dice.element.addEventListener("click", (e) => {
			if(dice.element.classList.contains("selecting")) {
				if(dice.element.classList.contains("selected"))
					dice.element.classList.remove("selected");
				else
					dice.element.classList.add("selected");

			} else if(!dice.element.classList.contains("disabled"))
				dice.roll(new Time(2, DurationType.SECOND));
		});

		document.getElementById("dicesContainer").appendChild(dice.element);

		return dice;
	});

	canvas = document.querySelector("canvas");
	textBox = document.getElementById("textBox");

	setTargetContext(canvas.getContext("2d"));
	
	start();
}

function start() {
	setup();
	startLooping();
}

function controllingLoop() {
	let deltaTime = 0;
	let startTime;
	let endTime;
	
	startTime = new Date();
	
	loop();

	endTime = new Date();
	deltaTime = endTime - startTime;
	numberOfFrames++;

	controllingLoopTimeout = setTimeout(controllingLoop, 1000/wantedFPS - deltaTime/1000);
}

function startLooping() {
	clearTimeout(controllingLoopTimeout);
	controllingLoop();
}

function stopLooping() {
	clearTimeout(controllingLoopTimeout);
}
