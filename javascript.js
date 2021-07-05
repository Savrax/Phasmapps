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


const phantom = {name:"Phantom", items:"Thermometer, EMF Reader, Video Camera, Head Mounted Camera"};
const banshee = {name:"Banshee", items:"Thermometer, EMF Reader, UV Light, Glowstick"};
const mare = {name:"Mare", items:"Thermometer, Video Camera, Head Mounted Camera, Spirit Box"};
const yurei = {name:"Yurei", items:"Thermometer, Video Camera, Head Mounted Camera, Ghost Writing Book"};
const demon = {name:"Demon", items:"Thermometer, Spirit Box, Ghost Writing Book"};
const wraith = {name:"Wraith", items:"Thermometer, Spirit Box, UV Light, Glowstick"};
const jinn = {name:"Jinn", items:"EMF Reader, Video Camera, Head Mounted Camera, Spirit Box"};
const shade = {name:"Shade", items:"EMF Reader, Video Camera, Head Mounted Camera, Ghost Writing Book"};
const oni = {name:"Oni", items:"EMF Reader, Spirit Box, Ghost Writing Book"};
const revenant = {name:"Revenant", items:"EMF Reader, Ghost Writing Book, UV Light, Glowstick"};
const poltergeist = {name:"Poltergeist", items:"Video Camera, Head Mounted Camera, Spirit Box, UV Light, Glowstick"};
const spirit = {name:"Spirit", items:"Spirit Box, Ghost Writing Book, UV Light, Glowstick"};
const yokai = {name:"Yokai", items:"Spirit Box, Ghost Writing Book, Video Camera, Head Mounted Camera"};
const hantu = {name:"Hantu", items:"UV Light, Glowstick, Video Camera, Head Mounted Camera, Ghost Writing Book"};

const ghostList = [
	phantom, banshee, mare, yurei, demon, wraith, jinn, shade, oni, revenant, poltergeist, spirit, yokai, hantu
]

function randomSingleItem() {
	var randomNumber = Math.floor(Math.random() * (items.length));
	document.getElementById('itemDisplay').innerHTML = items[randomNumber];
}

function randomLoadout() {
	
	var rerollNeeded = true;
	var loadoutTable = {};
	
	var randomLightNumber = Math.floor(Math.random() * (lightItems.length));
	
	do {
		rollLoadout();
	
		let loadoutNumbers = rollLoadout();
	
		loadoutTable = [loadoutItems[loadoutNumbers[0]], loadoutItems[loadoutNumbers[1]], loadoutItems[loadoutNumbers[2]]];
		
		if ((loadoutTable.includes("Video Camera (no tripod)")) && (loadoutTable.includes("Video Camera (with tripod)"))) {
			rerollNeeded = true;
		} else {
			rerollNeeded = false;
		}
		
	} while (rerollNeeded === true);
	

	
	//fullLoadout = lightItems[randomLightNumber] + ', ' + loadoutItems[randomLoadoutNumberOne] + ', ' + loadoutItems[randomLoadoutNumberTwo] + ', ' + loadoutItems[randomLoadoutNumberThree]
	fullLoadout = lightItems[randomLightNumber] + ', ' + loadoutTable[0] + ', ' + loadoutTable[1] + ', ' + loadoutTable[2];
	
	document.getElementById('loadoutDisplay').innerHTML = fullLoadout;

	
}
function ghostRandomize() {
	
	var randomNumber = Math.floor(Math.random() * (ghostList.length));
	
	document.getElementById('ghostNameDisplay').innerHTML = ghostList[randomNumber].name;
	document.getElementById('ghostItemDisplay').innerHTML = ghostList[randomNumber].items;
	
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
