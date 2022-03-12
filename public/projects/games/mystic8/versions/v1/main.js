let divArr = [2,"guuh",1];
let body = document.querySelector('body');
function load(){
  for (var j=0; j<divArr.length; j++){
        // add.addEventListener('click', );
    body.innerHTML += `<div id="${j}" class="easier" onclick="shift( ${j} )"> ${divArr[j]} </div>`;
    // var add = document.getElementById(j);
  }
}

function shift(id){
  let el = document.getElementById(id);
  for (let i=0; i<divArr.length; i++){
    if (i == divArr.length-divArr.length){
      checkRight(el, id);
    }
    else if (i == divArr.length-1){
      checkLeft(el, id);
    }
  }
}

function checkLeft(el, id){
  let guh = document.getElementById(id-1);
  if (divArr[id-1]==="guuh"){
    // alert("LEFT");
    el.innerText = divArr[id-1];
    el.id = id-1;
    el.setAttribute('onclick',`shift(${id-1})`)
    guh.innerText = divArr[id];
    guh.id = id;
    guh.setAttribute('onclick',`shift(${id})`)

  }
}
function checkRight(el, id){
  let duh = document.getElementById(id+1);
  if (divArr[id+1]==="guuh"){
    // alert("RIGHT");
    el.innerText = divArr[id+1];
    el.id = id+1;
    el.setAttribute('onclick',`shift(${id+1})`)
    duh.innerText = divArr[id];
    duh.id = id;
    duh.setAttribute('onclick',`shift(${id})`)
    // guh.id = n;
    // z.addEventListener("click", shift(n+1));
  }
}



