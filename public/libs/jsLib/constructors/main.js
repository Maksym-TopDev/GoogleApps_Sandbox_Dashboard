class gameShell {
  constructor(getName, start, loopy, loadMsg, box, showDesc){
    this.getName = getName;
    this.start = start;
    this.loopy = loopy;
    this.loadMsg = loadMsg;
    this.box = box;
    this.showDesc = showDesc;
  }
}

class MysticTileGame extends gameShell {
  constructor(getName, start, loopy, loadMsg, box, showDesc, shift, moveLeft, moveRight, moveUp, moveDown){
    super(getName, start, loopy, loadMsg, box, showDesc);
    this.shift = shift;
    this.moveLeft = moveLeft;
    this.moveRight = moveRight;
    this.moveUp = moveUp;
    this.moveDown = moveDown;
  }
}

class TicTacToe extends gameShell {
  constructor(getName, start, loopy, loadMsg, box, showDesc, turn, btns){
    super(getName, start, loopy, loadMsg, box, showDesc);
    this.turn = turn;
    this.btns = btns;
  }
}
