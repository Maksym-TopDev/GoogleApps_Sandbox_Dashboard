// Initialize Firebase
// LOAD JQUERY CDN IN HTML
{/* <body>
		<h1 id="intro">Welcome</h1>
		<div id="config">
		    <input type="text" id="togg" placeholder="name"/>
		    <input type="submit" value="log up" id="button" onclick='storeName(document.querySelector("#togg").value)'>
	  	</div>

		<button id="toggle" onclick="show()">Click for lists</button><br>

		<!-- style must be installed in elements so the toggle cna be instantaneous -->
		<div id="listers" style="display: none;">
			<button onclick="playlist('PL8A13ED54AD5AE30A')">Decibel list</button>
		</div>
		<div id="singles" style="display: inline;"></div>
		<!-- <div id="listers"></div> -->
		<div id="block"></div>

		<script src="https://www.gstatic.com/firebasejs/4.5.1/firebase.js"></script>
	    <script src='./src/main.js'></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	</body> */}

var config = {
	apiKey: "AIzaSyBsMZn5ArF_zFpSYfy7husO1tdHbHcs41M",
	authDomain: "bootleg-youtube-music-app.firebaseapp.com",
	databaseURL: "https://bootleg-youtube-music-app.firebaseio.com",
	projectId: "bootleg-youtube-music-app",
	storageBucket: "",
	messagingSenderId: "324934807777"
};
firebase.initializeApp(config);
console.log("firebase log: "+config);

let database = firebase.database();

// global name
let global = "";
// retrieving data
function store(url,song){
	document.querySelector('#url').value = "";
	document.querySelector('#song').value = "";
	document.querySelector('#singles').innerHTML = "";
	console.log("firebase 2nd log: "+firebase);
	// filter out watch id from url
	url = url.substr(32, 42);
	console.log("embed: "+url);

	// send watch id into storage
	let ref = database.ref(global);
	let data = {
		url: `${url}`,
		song: `${song}`
	}
	ref.push(data);

}

// stores database name into global
function storeName(name){
	// create parent directory in fire base using name
	global = `${name}`;
	console.log(global);


	let ref = database.ref(global);
	ref.on('value', gotData, errData);

	// toggle between create and log in
	let lock = true;
	let config = document.querySelector("#config");
	if(lock == true){
		console.log(lock);
		config.innerHTML = `<input type="text" id="url" placeholder="youtube url"/><input type="text" id="song" placeholder="name your song"/>
	    <input type="submit" value="store" id="button" onclick='store(document.querySelector("#url").value,document.querySelector("#song").value)'>`
		lock = false;
	}
}

function gotData(data){
	console.log(data.val());
	let names = data.val();
	let intro = document.querySelector("#intro");
	intro.innerText = "";
	intro.innerText += `Welcome, ${global}`;

	let keys = Object.keys(names);
	console.log(keys);
	let singles = document.querySelector("#singles");
	let listers = document.querySelector("#listers");
	for(let i=0; i<keys.length; i++){
		let k = keys[i];
		// console.log(k);
		let url = names[k].url;
		let song = names[k].song;
		console.log(url,song);
		// listers.innerHTML = ``;
		singles.innerHTML += `<button onclick="playsingles('${url}')">${song}</button>`;
		// singles.innerHTML = `<button onclick="playsingles('${i}')">${i}</button>`;
	}

}
function errData(data){
	console.log("ERROR: "+data);
}

// toggle buttons between list and single 
let block = document.querySelector("#block");
let lock = true;
function show(){
	// // toggle for hard coded music samples


	// toggle for button fields
	let listers = document.querySelector("#listers");
	let singles = document.querySelector("#singles");
	let toggle = document.querySelector("#toggle");
	// let options = document.querySelector("#options");

	if(listers.style.display == "none"){
		singles.style.display = "none";
		listers.style.display = "inline";
		toggle.innerText = "Click for singles";
	}
	else{
		singles.style.display = "inline";
		listers.style.display = "none";
		toggle.innerText = "Click for lists";
	}
}

// youtube video link templates
function playlist(list){
	block.innerHTML = `<iframe width="700" height="550" src="https://www.youtube.com/embed/_vS0_1tdqMI?rel=0&amp;autoplay=1&amp;loop=1&amp;list=${list}"frameborder="0" allowfullscreen></iframe>`
}
function playsingles(single){
	block.innerHTML = `<iframe width="700" height="550" src="https://www.youtube.com/embed/${single}?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>`
}