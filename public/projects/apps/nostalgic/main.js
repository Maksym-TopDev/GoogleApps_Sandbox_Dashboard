{/* LOAD TO HTML
  <body onload="run()" id="sky">
<!--<audio autoplay loop>
		<source src="dustforce.ogg" type="audio/ogg">
		<source src="dustforce.mp3" type="audio/mp3">
	</audio> -->
	<iframe width="0" height="0" src="https://www.youtube.com/embed/4fBQDzRvCTs?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>

	<div id="sun"></div>
	<div id="moon"></div>
	<div id="cloud"></div>
	<div id="clouda"></div>
	<div id="cloudb"></div>
	<div id="cloud2"></div>
	<div id="cloud2a"></div>
	<div id="cloud2b"></div>
	<div id="haunter""></div>

	<div id="megaman1"></div>
	<div id="mario1"></div>
	<div class="grass"></div>

	
	
	<div id="pine2"></div>
	
	<div id="tree"></div>
	<div id="charmil"></div>
	<div id="fire"></div>

	<div id="bomb"></div>
	<div id="twist"></div>
	<div id="vict"></div>
	

	<div id="megaman"></div>
	<div id="mario""></div>
	
	<div id="gengar"></div>
	<div id="pine4"></div>
	<div id="pine5"></div>
	<div id="pine3"></div>

	<div id="megaman2"></div>
	<div id="mario2"></div>
	
	<!-- <button onclick="run()">cloud</button> --></source> */}

function appear (el){
  var elem = document.getElementById(el);
  elem.style.transition = "backgroundColor 5.0s ease-in infinite";
  elem.style.backgroundColor = "darkblue";
}
function run (uh){
  var dek = document.getElementById('mario2');
  var tek = document.getElementById('megaman2');
  var ele = document.getElementById('mario');
  var del = document.getElementById('megaman');
  var ete = document.getElementById('mario1');
  var tel = document.getElementById('megaman1');
  var zet = document.getElementById('cloud');
  var tet = document.getElementById('clouda');
  var fet = document.getElementById('cloudb');
  var cet = document.getElementById('cloud2');
  var eet = document.getElementById('cloud2a');
  var bet = document.getElementById('cloud2b');
  var sun = document.getElementById('sun');
  var moon = document.getElementById('moon');
  var hunt = document.getElementById('haunter');

  var ter = 0;

  var pos = 0;
  var pos1 = 0;
  var pos2 = 0;
  var pos3 = 0;
  var pos4 = 0;
  var pos5 = 0;

  var posX = 0;
  var posZ = 0;

  var posA = 0;
  var posB = 0;
  var posC = 0;
  var posD = 0;


  var set = 0;
  var rise = 0;
  var id = setInterval(frame, 5);
  function frame(){
    if (pos4 == 40){
      posC+=1;
      dek.style.left = posC + 'px';

      posD+=2;
      tek.style.left = posD + 'px';
      clearInterval(id);
    }			
    else {
      pos+=0.2;
      cet.style.left = pos + 'px';
    
      pos1+=0.3;
      zet.style.left = pos1 + 'px';
    
      pos2+=0.1;
      tet.style.left = pos2 + 'px';
    
      pos3+=0.4;
      eet.style.left = pos3 + 'px';
    
      pos4+=0.2;
      fet.style.left = pos4 + 'px';
    
      pos5+=0.1;
      bet.style.left = pos5 + 'px';

      posX+=3;
      del.style.left = posX + 'px';

      posZ+=2;
      ele.style.left = posZ + 'px';

      posA+=0.4;
      tel.style.right = posA + 'px';

      posB+=0.3;
      ete.style.right = posB + 'px';

      set+=0.1;
      sun.style.top = set + 'px';

      rise+=0.09;
      moon.style.bottom = rise + 'px';

      ter+=0.2;
      hunt.style.bottom = ter + 'px';

      posC+=7;
      tek.style.left = posC + 'px';

      posD+=5;
      dek.style.left = posD + 'px';


    }
  }
}