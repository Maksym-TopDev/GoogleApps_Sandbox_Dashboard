# RIVALRY(Tic Tac Toe)

![fight](https://raw.githubusercontent.com/Alvarian/static_env/master/public/media/rivalry/fight.jpg)

"The very first move both you and your opponent declared determines who has won before the game has finished."

### [View style sheet](https://github.com/Alvarian/static_env/blob/master/public/css/rivalry.css)

### [View javascript](https://github.com/Alvarian/static_env/blob/master/public/js/rivalry.js)

## Sample Code Used

From main.js
```
const turn = function(id){
  let togg = document.getElementById(id);
  if (tracker.innerHTML === "O's TURN!"){
    togg.innerHTML = 'O';
    tracker.innerHTML = "X's TURN!";
  }
  else {
    togg.innerHTML = 'X';
    tracker.innerHTML = "O's TURN!";
  }
};
```

This function allows the toggle between turns to occur after onclick event on a box is done.

## Instructions 

The objective is to get three in a row before your rival. All you need is your opponent and your method. Click the squares to declare your move!

## READY?

To play Rivalry, please visit [my portfolio project gallery](https://ivanalvarez.herokuapp.com/projects), click && locate the swords icon and enjoy.

Or 

Play it using my light weight express environment containing all my logic apps. Visit [/static_env](https://github.com/Alvarian/static_env) and follow my instructions to get started.

## Future Improvements

-Versus AI