let divID = [
                    [2,1,3],
                    [4,5,6],
                    [7,8,0]
                  ];
let divPOS = [
                        [88,81,82],
                        [18,11,12],
                        [28,21,22]
                      ];
let body = document.querySelector('body');
body.innerHTML += '<div id="contain">';
let contain = document.getElementById('contain');

function load(){
  for(let i=0; i<divID.length; i++){
    for (let j=0; j<divID.length; j++){

      contain.innerHTML += `<div id="${ divID[i][j] }" class="easier" onclick="shift( ${ divPOS[i][j] }, ${ divID[i][j] }, ${j}, ${i} )"> ${ divID[i][j] } </div>`;

    }
  }
  alert(divID[0][0]);
}

function shift(pos, id, j, i){
  // alert(`Spot is ${pos}, ID is ${id}`);
  // alert("j is "+j);
  let el = document.getElementById(id);
  alert(el.innerHTML);s

  // row1
  if (pos == divPOS[0][0]){
    alert('right, down. pos is'+pos);
    checkRight(el, id, j, i);
    checkDown(el, id, j);
  }
  else if (pos == divPOS[0][1]){
    // alert(pos);
    // alert('left, right, down');
    checkLeft(el, id, j, i);
    checkRight(el, id, j, i);
    checkDown(el, id, j, i);
  }
  else if (pos == divPOS[0][2]){
    alert('left, down. pos is '+pos);
    checkLeft(el, id, j, i);
    checkDown(el, id, j, i);
  }


  // row2
  else if (pos == divPOS[1][0]){
    // alert(pos);
    // alert('up, down, right');
    checkRight(el, id, j, i);
    checkUp(el, id, j, i);
    checkDown(el, id, j, i);
  }
  else if (pos == divPOS[1][1] ){

    alert(pos);
    alert('left, right, down, up');
    let guh = document.getElementById(divID[i][j-1]);
    alert("left is "+divID[i][j-1]);

    let uh = document.getElementById(divID[i-1][j]);
    alert("up is "+divID[i-1][j]);

    let duh = document.getElementById(divID[i][j+1]);
    alert("right is "+divID[i][j+1]);

    let fuh = document.getElementById(divID[i+1][j]);
    alert("down is "+divID[i+1][j]);

    if (divID[i][j-1]==0){
      alert("LEFT");
      // alert(divID[i][j-1]);
      el.innerText = divID[i][j-1];
      el.id = divID[i][j-1];
      el.setAttribute('onclick',`shift( ${ divPOS[i][j-1] }, ${divID[i][j-1]}, ${j-1}, ${i} )`)
      guh.innerText = id;
      guh.id = id;
      guh.setAttribute('onclick',`shift( ${ divPOS[i][j] }, ${ divID[i][j] }, ${j}, ${i} )`);
    }
    else if (divID[i][j+1]==0){
      alert("RIGHT");
      el.innerText = divID[i][j+1];
      el.id = divID[i][j+1];
      el.setAttribute('onclick',`shift( ${ divPOS[i][j+1] }, ${divID[i][j+1]}, ${j+1}, ${i} )`)
      duh.innerText = id;
      duh.id = id;
      duh.setAttribute('onclick',`shift( ${ divPOS[i][j] }, ${ divID[i][j] }, ${j}, ${i} )`);
    }
    else if (divID[i-1][j]==0){
      alert("UP");
      el.innerText = divID[i-1][j];
      el.id = divID[i-1][j];
      el.setAttribute('onclick',`shift( ${ divPOS[i-1][j] }, ${divID[i-1][j]}, ${j}, ${i-1} )`)
      fuh.innerText = id;
      fuh.id = id;
      fuh.setAttribute('onclick',`shift( ${ divPOS[i][j] }, ${ divID[i][j] }, ${j}, ${i} )`);
    }

    else if (divID[i+1][j]==0){
      alert("DOWN");
      el.innerText = divID[i+1][j];
      el.id = divID[i+1][j];
      el.setAttribute('onclick',`shift( ${ divPOS[i+1][j] }, ${divID[i+1][j]}, ${j}, ${i+1} )`)
      uh.innerText = id;
      uh.id = id;
      uh.setAttribute('onclick',`shift( ${ divPOS[i][j] }, ${ divID[i][j] }, ${j}, ${i} )`);
    }
  }
  else if (pos == divPOS[1][2]){
    // alert(pos);
    // alert('left, up, down');
    checkLeft(el, id, j, i);
    checkUp(el, id, j, i);
    checkDown(el, id, j, i);
  }


  // row3
  else if (pos == divPOS[2][0]){
    // alert(pos);
    alert('right, up. pos is '+pos);
    checkRight(el, id, j, i);
    checkUp(el, id, j, i);
  }
  else if (pos == divPOS[2][1] ){
    // alert(pos);
    // alert('left, right, up');
    checkLeft(el, id, j, i);
    checkRight(el, id, j, i);
    checkUp(el, id, j, i);
  }
  else if (pos == divPOS[2][2]){
    alert('left, up. pos is '+pos);
    checkLeft(el, id, j, i);
    checkUp(el, id, j, i);
  }
}

// let width = divPOS.length;

function checkLeft(el, id, j, i){
  // alert("left");
  // alert("j is "+j);
  // alert(el.innerHTML);
  let guh = document.getElementById(divID[i][j-1]);
  if (divID[i][j-1]==0){
    // alert("LEFT");
    // alert(divID[i][j-1]);
    el.innerText = divID[i][j-1];
    el.id = divID[i][j-1];
    el.setAttribute('onclick',`shift( ${ divPOS[i][j-1] }, ${divID[i][j-1]}, ${j-1}, ${i} )`)
    guh.innerText = id;
    guh.id = id;
    guh.setAttribute('onclick',`shift( ${ divPOS[i][j] }, ${ divID[i][j] }, ${j}, ${i} )`);

  }
}
function checkRight(el, id, j, i){
  // alert("right");
  // alert(j);
  // alert(el.innerHTML);
  let duh = document.getElementById(divID[i][j+1]);
  if (divID[i][j+1]==0){
    // alert("RIGHT");
    el.innerText = divID[i][j+1];
    el.id = divID[i][j+1];
    el.setAttribute('onclick',`shift( ${ divPOS[i][j+1] }, ${divID[i][j+1]}, ${j+1}, ${i} )`)
    duh.innerText = id;
    duh.id = id;
    duh.setAttribute('onclick',`shift( ${ divPOS[i][j] }, ${ divID[i][j] }, ${j}, ${i} )`);
  }
}

function checkUp(el, id, j, i){
  // alert("up");
  // alert(el.innerHTML);
  let duh = document.getElementById(divID[i-1][j]);
  if (divID[i-1][j]==0){
    // alert("UP");
    el.innerText = divID[i-1][j];
    el.id = divID[i-1][j];
    el.setAttribute('onclick',`shift( ${ divPOS[i-1][j] }, ${divID[i-1][j]}, ${j}, ${i-1} )`)
    duh.innerText = id;
    duh.id = id;
    duh.setAttribute('onclick',`shift( ${ divPOS[i][j] }, ${ divID[i][j] }, ${j}, ${i} )`);
  }
}
function checkDown(el, id, j, i){
  // alert("down");
  // alert(el.innerHTML);
  let duh = document.getElementById(divID[i+1][j]);
  alert(duh.innerHTML);
  if (divID[i+1][j]==0){
    // alert("DOWN");
    el.innerText = divID[i+1][j];
    el.id = divID[i+1][j];
    el.setAttribute('onclick',`shift( ${ divPOS[i+1][j] }, ${divID[i+1][j]}, ${j}, ${i+1} )`)
    duh.innerText = id;
    duh.id = id;
    duh.setAttribute('onclick',`shift( ${ divPOS[i][j] }, ${ divID[i][j] }, ${j}, ${i} )`);
  }
}







