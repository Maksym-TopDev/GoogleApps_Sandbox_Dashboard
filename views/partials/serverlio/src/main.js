console.log("guuh");

// control fade in for left side buttons

let btn1 = document.querySelector('.one');
let btn2 = document.querySelector('.two');
let btn3 = document.querySelector('.three');
let btn4 = document.querySelector('.four');

setTimeout(forBtn1, 7000);
setTimeout(forBtn2, 6000);
setTimeout(forBtn3, 5000);
setTimeout(forBtn4, 4000);

function forBtn1(){
	let incre = setInterval(opa, 50);
	let time = 0;
	function opa(){
		if (time == 10){
			clearInterval(incre);
			console.log("time out");
		}
		else {
			time += 1;
			btn1.style.opacity = time/10;
			// console.log("time: "+time);
			// console.log("opacity: "+time/10);
		}
	}
}	

function forBtn2(){
	let incre = setInterval(opa, 50);
	let time = 0;
	function opa(){
		if (time == 10){
			clearInterval(incre);
			console.log("time out");
		}
		else {
			time += 1;
			btn2.style.opacity = time/10;
			// console.log("time: "+time);
			// console.log("opacity: "+time/10);
		}
	}
}	

function forBtn3(){
	let incre = setInterval(opa, 50);
	let time = 0;
	function opa(){
		if (time == 10){
			clearInterval(incre);
			console.log("time out");
		}
		else {
			time += 1;
			btn3.style.opacity = time/10;
			// console.log("time: "+time);
			// console.log("opacity: "+time/10);
		}
	}
}	

function forBtn4(){
	let incre = setInterval(opa, 50);
	let time = 0;
	function opa(){
		if (time == 10){
			clearInterval(incre);
			console.log("time out");
		}
		else {
			time += 1;
			btn4.style.opacity = time/10;
			// console.log("time: "+time);
			// console.log("opacity: "+time/10);
		}
	}
}	


// gallery

let modals = document.querySelector('#modals');

let conts = document.querySelector('.conts');
let games = ['Mystic15','TicTacToe','Snake','PingPong'];
let gameModals = [];

for(let i=0; i<games.length; i++){
	console.log("games: "+games[i]);
	conts.innerHTML += `<div id="${games[i]}" class="slideInRight" onclick="show('${games[i]}')">${games[i]}</div>`;
	modals.innerHTML += `<div id="${games[i]}-Modal" class="modal"><a class="close" onclick="foo('${games[i]}')">close</a><div id="gameContent"></div></div>`;

	// div.innerHTML = `<div class="${games[i]}-Content"></div>`;
	// gameModals.push(document.querySelector(`#${games[i]}-Modal`));
	// console.log(gameModals);

	// let div = document.createElement("div");
	// let id = document.createAttribute("id");
	// let clas = document.createAttribute("class");
	// id.value = `${games[i]}-Modal`;
	// clas.value = "modal";
	// div.setAttributeNode(id);
	// div.setAttributeNode(clas);
	// body.appendChild(div);	

	// div.innerHTML = "<span class='close'>close</span>";
	// div.innerHTML += `<div class="gameContent"></div>`;

	// document.getElementById(`${games[i]}`).addEventListener("click", function(){
	// 	// console.log(`${games[i]} clicked`);
	// 	console.log(`${div} clicked`);
	// 	div.style.display = "block";
	// });
	// document.querySelector('.close').onclick = function() {
	//     div.style.display = "none";
	// }
}

let zonts = document.querySelector('.zonts');
let art = ['davinchi','guuh'];
let artModals = [];

for(let i=0; i<art.length; i++){
	// console.log("arts: "+art[i]);
	zonts.innerHTML += `<div id="${art[i]}" class="slideInRight" onclick="show('${art[i]}')">${art[i]}</div>`;
	modals.innerHTML += `<div id="${art[i]}-Modal" class="modal"><a class="close" onclick="foo('${art[i]}')">close</a><div id="artContent"></div></div>`;

	// div.innerHTML = `<div class="${art[i]}-Content"></div>`;
	// artModals.push(document.querySelector(`#${art[i]}-Modal`));
	// console.log(artModals);

	// let div = document.createElement("div");
	// let id = document.createAttribute("id");
	// let clas = document.createAttribute("class");
	// id.value = `${art[i]}-Modal`;
	// clas.value = "modal";
	// div.setAttributeNode(id);
	// div.setAttributeNode(clas);
	// body.appendChild(div);

	// div.innerHTML = "<span class='close'>close</span>";
	// div.innerHTML = `<div class="artContent"></div>`;

	// document.getElementById(`${art[i]}`).addEventListener("click", function(){
	// 	// console.log(`${art[i]} clicked`);
	// 	console.log(`${div} clicked`);
	// 	div.style.display = "block";
	// });
	// document.querySelector('.close').onclick = function() {
	//     div.style.display = "none";
	// }
}

function show(name){
	console.log("open: "+name);
	document.getElementById(`${name}-Modal`).style.display = "block";
}

function foo(name){
	console.log("close: "+name);
	document.getElementById(`${name}-Modal`).style.display = "none";
}


// volume

function showVal(val){
	// console.log(volume);
	document.querySelector('#theval').innerHTML = val+"%";
	document.querySelector('audio').volume = val/100;
}


// modal boxes

let modalOne = document.getElementById('modalOne');
let modalTwo = document.getElementById('modalTwo');

document.querySelector('.will').onclick = function() {
    modalOne.style.display = "block";
	// console.log("will do clicked");
}

document.querySelector('.have').onclick = function() {
    modalTwo.style.display = "block";
	// console.log("have do clicked");
}

document.querySelector('.close').onclick = function() {
    modalOne.style.display = "none";
    modalTwo.style.display = "none";
}

window.onclick = function(event) {
   	console.log("about event: "+event.target.id);
    if (event.target == modalOne || event.target == modalTwo) {
	    modalOne.style.display = "none";
	    modalTwo.style.display = "none";
    }
}