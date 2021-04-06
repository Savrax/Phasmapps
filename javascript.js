const items = [
	"EMF Reader",
	"Regular Flashlight",
	"Photo Camera",
	"Lighter",
	"Candle",
	"UV Light",
	"Crucifix",
	"Video Camera",
	"Spirit Box",
	"Salt",
	"Smudge Sticks",
	"Tripod",
	"Strong Flashlight",
	"Motion Sensor",
	"Sound Sensor",
	"Sanity Pills",
	"Thermometer",
	"Ghost Writing Book",
	"Infrared Light Sensor",
	"Parabolic Microphone",
	"Glowstick",
	"Head Mounted Camera",
]

const loadoutItems = [
	"EMF Reader",
	"Photo Camera",
	"UV Light",
	"Crucifix",
	"Video Camera (no tripod)",
	"Video Camera (with tripod)",
	"Spirit Box",
	"Salt",
	"Smudge Sticks with Lighter",
	"Motion Sensor",
	"Sound Sensor",
	"Sanity Pills",
	"Thermometer",
	"Ghost Writing Book",
	"Infrared Light Sensor",
	"Parabolic Microphone",
	"Glowstick",
	"Head Mounted Camera",
	//"Lighter",
	//"Tripod",
]

const lightItems = [
	"Regular Flashlight",
	"Candle with Lighter",
	"Strong Flashlight",
]

function randomSingleItem() {
	var randomNumber = Math.floor(Math.random() * (items.length));
	document.getElementById('itemDisplay').innerHTML = items[randomNumber];
}

function randomLoadout() {
	
	var rerollNeeded = true;
	
	var randomLightNumber = Math.floor(Math.random() * (lightItems.length));
	
	do {
		rollLoadout();
	
		let loadoutNumbers = rollLoadout();
	
		let loadoutTable = [loadoutItems[loadoutNumbers[0]], loadoutItems[loadoutNumbers[1]], loadoutItems[loadoutNumbers[2]]];
		
		if ((loadoutTable.includes("Video Camera (no tripod)")) && (loadoutTable.includes("Video Camera (with tripod)"))) {
			rerollNeeded = true;
		} else {
			rerollNeeded = false;
		}
		
	} while (rerollNeeded === true);
	
	fullLoadout = lightItems[randomLightNumber] + ', ' + loadoutItems[randomLoadoutNumberOne] + ', ' + loadoutItems[randomLoadoutNumberTwo] + ', ' + loadoutItems[randomLoadoutNumberThree]
	
	document.getElementById('loadoutDisplay').innerHTML = fullLoadout
	
	// next up: make a ghost randomizer that displays the evidence items used to investigate it
	
function ghostRandomize() {
	
	
}


function rollLoadout() {
	
	var randomLoadoutNumberOne = Math.floor(Math.random() * (loadoutItems.length));
	
	do {
		randomLoadoutNumberTwo = Math.floor(Math.random() * (loadoutItems.length));
	} while (randomLoadoutNumberTwo === randomLoadoutNumberOne);
	
	do {
		randomLoadoutNumberThree = Math.floor(Math.random() * (loadoutItems.length));
	} while (randomLoadoutNumberThree === randomLoadoutNumberTwo || randomLoadoutNumberThree === randomLoadoutNumberOne);
	
	return [randomLoadoutNumberOne, randomLoadoutNumberTwo, randomLoadoutNumberThree]
	
}

}


