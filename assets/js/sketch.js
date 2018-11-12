"use strict";

let isShowingPassIcon = false;
let isSpeaking = false;

let musicAudio;

let backgroundImg = new Image();
let normalCharImg = new Image();
let speakSpriteSheet = new Image();
let passIcon = new Image();

let speakAnimation;

let messages;
let messageIndex;
let drawMessageInterval;

let charIndex;

let currentSequence;

function setup() {
	musicAudio = document.getElementById("musicAudio");
	backgroundImg.src = "assets/img/background.png";
	normalCharImg.src = "assets/img/character/normal.png";
	speakSpriteSheet.src = "assets/img/character/speakAnimation.png";
	passIcon.src = "assets/img/pass_arrow.png";

	speakAnimation = new Animation(new SpriteSheet(speakSpriteSheet, new Vector(666, 700), 10),
				       new Vector(243, 37),
				       [0, 1, 2, 3],
				       [3, 3, 3]);
	startIntro();
	musicAudio.play();
}

function loop() {
	drawImage(backgroundImg, 0, 0)

	if(isSpeaking)
		speakAnimation.draw();
	else
		drawImage(normalCharImg, 233, 37);

	if(isShowingPassIcon)
		drawImage(passIcon, canvas.width - (passIcon.width + 10), canvas.height - (passIcon.height + 10));
}

function nextMessage(nextSequence) {
	clearInterval(drawMessageInterval);
	isShowingPassIcon = false;
	textBox.innerHTML = "";

	if(messageIndex === messages.length) {
		isSpeaking = false;
		nextSequence();
		return;
	}

	charIndex = 0;
	drawMessageInterval = setInterval(drawNextChar, 30);
	isSpeaking = true;
}

function drawNextChar() {
	if(charIndex === messages[messageIndex].length) {
		clearInterval(drawMessageInterval);
		isSpeaking = false;
		isShowingPassIcon = true;
		messageIndex++;
		return;
	}
	textBox.insertAdjacentText("beforeend", messages[messageIndex][charIndex]);
	charIndex++;
}
