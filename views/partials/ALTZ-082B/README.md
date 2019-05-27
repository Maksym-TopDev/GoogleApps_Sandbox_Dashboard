# ALTZ-082B (MYSTIC 8 PUZZLE)


### [View style sheet](https://github.com/Alvarian/static_env/blob/master/public/css/altz.css)

### [View javascript](https://github.com/Alvarian/static_env/blob/master/public/js/altz/altz.js)


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

## Wireframe
![My original idea](https://github.com/Alvarian/static_env/blob/master/public/media/altz/wireframe.png?raw=true)

## Instructions
Order the elements from 1 to 8, left to right, up to down, with the empty element at the very end.
Versus the real life puzzle, you are timed. Encrpyt the puzzle in time or face a surprise!

## Unsolved problems
From the beginning, I planned to have this game multileveled by due date. By multileveled, level 2 for instance would have the same gameplay
as level 1 but will have a 1 unit addition to both dimensions thus making it the original MYSTIC 15 PUZZLE.

## READY?

To play Rivalry, please visit [my portfolio project gallery](https://ivanalvarez.herokuapp.com/projects), click && locate the bomb icon and enjoy.

Or 

Play it using my light weight express environment containing all my logic apps. Visit [/static_env](https://github.com/Alvarian/static_env) and follow my instructions to get started.

## Future improvements

-Include a countdown clock that resets user progress when down to zero

## [RETURN TO INTRO](https://github.com/Alvarian/INTRO)
