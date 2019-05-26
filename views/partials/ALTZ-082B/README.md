# ALTZ-082B (MYSTIC 8 PUZZLE)


### [View style sheet](https://github.com/Alvarian/static_env/blob/master/public/css/altz.css)

### [View source script](https://github.com/Alvarian/static_env/blob/master/public/js/precursor/altz.js)


## Sample Code

The code provided below is from file src/verfinal.js starting on line 384

```
function shift(pos, id, i){
  let el = document.getElementById(id);
  if (only==true){
    document.getElementById("mansion").play();
    let timed = setInterval(function(){
        // scramble divID
        // alert(divID);

        // flash
        let stack = 0;
        let flash = setInterval(function(){
            var all = document.querySelector('*');
            stack++;
            // alert(only);
            if (stack=='7'){
              clearInterval(flash);
              document.getElementById("mansion").currentTime = 0;
              document.getElementById("mansion").pause();

              // SHUFFLE SYSTEM IS PURELY FROM STACKOVERFLOW. IN TIME, WILL MAKE IT MY OWN VERSION
              function shuffle(a) {
                for (v=divID.length; v; v--){
                  let j = Math.floor(Math.random() * v);

                  [divID[v - 1], divID[j]] = [divID[j], divID[v - 1]];
                }
                return a;
              }
              shuffle(divID);
              divID = shuffle(divID);
              contain.innerHTML = `<div onclick="shift( false )"></div>`;
              load();
              ...
```
With this function, onclick anywhere on the board will trigger a shuffle of your progress once and flash animation effect that would occur 7 times. 

## Approach taken
Since this game was purely logic, every chapter of the way, I had to resort to psuedo code as a foundation of keeping track of what I wanted for 
functionality.

## Wireframe
![My original idea](media/altz/wireframe.png)

## How-to-use instructions
Instructions are second nature for the nostalgic at most. Order the elements from 1 to 8, left to right, up to down, with the empty element at the very end.
Versus the real life puzzle, you are timed. Encrpyt the puzzle in time or face a surprise!

## Unsolved problems
From the beginning, I planned to have this game multileveled by due date. By multileveled, level 2 for instance would have the same gameplay
as level 1 but will have a 1 unit addition to both dimensions thus making it the original MYSTIC 15 PUZZLE.

## READY? 
### [PLAY NOW](http://curator-lawrence-68682.bitballoon.com/)