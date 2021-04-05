var items = [
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

var loadoutItems = [
	"EMF Reader",
	"Photo Camera",
	"Lighter",
	"UV Light",
	"Crucifix",
	"Video Camera",
	"Spirit Box",
	"Salt",
	"Smudge Sticks",
	"Tripod",
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

var lightItems = [
	"Regular Flashlight",
	"Candle",
	"Strong Flashlight",
]

function randomSingleItem() {
	var randomNumber = Math.floor(Math.random() * (items.length));
	document.getElementById('itemDisplay').innerHTML = items[randomNumber];
}

function randomLoadout() {
	var randomLightNumber = Math.floor(Math.random() * (lightItems.length));
	
	var randomLoadoutNumberOne = Math.floor(Math.random() * (loadoutItems.length));
	
	do {
		randomLoadoutNumberTwo = Math.floor(Math.random() * (loadoutItems.length));
	} while (randomLoadoutNumberTwo === randomLoadoutNumberOne);
	
	do {
		randomLoadoutNumberThree = Math.floor(Math.random() * (loadoutItems.length));
	} while (randomLoadoutNumberThree === randomLoadoutNumberTwo || randomLoadoutNumberThree === randomLoadoutNumberOne);
	
	fullLoadout = lightItems[randomLightNumber] + ', ' + loadoutItems[randomLoadoutNumberOne] + ', ' + loadoutItems[randomLoadoutNumberTwo] + ', ' + loadoutItems[randomLoadoutNumberThree]
	
	document.getElementById('loadoutDisplay').innerHTML = fullLoadout
	
	
	
}
