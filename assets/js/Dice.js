"use strict";

let defaultDiceSkin = new Array(6).fill().map(() => new Image(200, 200));
defaultDiceSkin.forEach((x, i) => x.src = "assets/img/default_dice_skin/" + (i + 1) + ".png");

class Dice {
	constructor(skin=defaultDiceSkin) {
		this.skin = skin;

		this.element = document.createElement("div");
		this.element.classList.add("dice");

		this.state = 1;
		this.showFace(1);
	}

	roll(time=new Time(500)) {
		if( !(time instanceof Time) )
			return instanceError("time", "Time");
		if(this.rollingTimeout !== undefined)
			clearTimeout(this.rollingTimeout);
		if(this.rollingInterval !== undefined)
			clearInterval(this.rollingInterval);

		this.rollingInterval = setInterval(() => this.showRandomFace(), 75);
		this.rollingTimeout = setInterval( () => {
			clearInterval(this.rollingInterval);
		}, time.getValueIn(DurationType.MILLISECOND));
	}

	showRandomFace() {
		this.showFace(randomInt(1, 6));
	}

	showFace(faceNumber) {
		if(faceNumber <= 0 || faceNumber > 6)
			return error("faceNumber has a wrong value");
		this.state = faceNumber;
		this.element.innerHTML = "";
		this.element.appendChild(this.skin[faceNumber - 1].cloneNode());
	}
}
