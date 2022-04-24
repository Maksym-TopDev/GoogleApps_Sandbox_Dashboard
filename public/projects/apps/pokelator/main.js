{/* LOAD TO HTML
  <section>
<a class="round" href="#" onclick="return false;" onmousedown="autoScrollTo('pika');"><img class="hover" src="images/Pokeball.png"></a>
<div id="exp">
  <div id="pika"></div>
  <div id="dex">
    <!-- <center> -->
      <FORM NAME="Calc">
        <TABLE>
          <th colspan="5">
            <INPUT placeholder="Calculate!" id="in" TYPE="text" NAME="Input" ></INPUT>
          </th>
          
          <tr class="row1">
            <td><INPUT TYPE="button" NAME="one"  VALUE=" 1 " OnClick="Calc.Input.value += ' 1 '"></INPUT></td>
            <td><INPUT TYPE="button" NAME="two"  VALUE=" 2 " OnClick="Calc.Input.value += '  2  '"></INPUT></td>
            <td><INPUT TYPE="button" NAME="three"  VALUE=" 3 " OnClick="Calc.Input.value += ' 3 '"></INPUT></td>
            <td><INPUT TYPE="button" NAME="four"  VALUE=" 4 " OnClick="Calc.Input.value += ' 4 '"></INPUT></td>
            <td><INPUT TYPE="button" NAME="five"  VALUE=" 5 " OnClick="Calc.Input.value += ' 5 '"></INPUT></td>
          </tr>

          <tr class="row2">
            <td><INPUT TYPE="button" NAME="six"  VALUE=" 6 " OnClick="Calc.Input.value += ' 6 '"></INPUT></td>
            <td><INPUT TYPE="button" NAME="seven"   VALUE=" 7 " OnClick="Calc.Input.value += ' 7 '"></INPUT></td>
            <td><INPUT TYPE="button" NAME="eight"   VALUE=" 8 " OnCLick="Calc.Input.value += ' 8 '"></INPUT></td>
            <td><INPUT TYPE="button" NAME="nine"   VALUE=" 9 " OnCLick="Calc.Input.value += ' 9 '"></INPUT></td>
            <td><INPUT TYPE="button" NAME="zero"  VALUE=" 0 " OnClick="Calc.Input.value += ' 0 '"></INPUT></td>
          </tr>

          <tr class="row3">
            <td id="td1"><INPUT class="circle" TYPE="button" NAME="plus"  VALUE=" + " OnClick="Calc.Input.value += ' + '"></INPUT></td>
            <td id="td2"><INPUT class="circle2" TYPE="button" NAME="sub"  VALUE=" - " OnClick="Calc.Input.value += ' - '"></INPUT></td>
            <td id="td3"><INPUT class="circle3" TYPE="button" NAME="mult"  VALUE=" x " OnClick="Calc.Input.value += ' * '"></INPUT></td>
            <td id="td4"><INPUT class="circle4" TYPE="button" NAME="div"  VALUE=" / " OnClick="Calc.Input.value += ' / '"></INPUT></td>
          </tr>

          <tr class="row4">
            <td><INPUT class="coma" TYPE="button" NAME="period"  VALUE=" , " OnClick="Calc.Input.value += ','"></INPUT></td>
            <td><INPUT class="equal" TYPE="button" NAME="equal"  VALUE=" = " OnClick="Calc.Input.value = eval(Calc.Input.value)"></INPUT></td>
          </tr>

          <tr class="row5">
            <td colspan="5"><INPUT class="sq" TYPE="button" NAME=""  VALUE=" CE  " OnClick="Calc.Input.value = ''"></INPUT></td>
            <td colspan="5"><INPUT class="sq1" TYPE="button" NAME=""  VALUE=" AVG  " OnClick="avg ()"></INPUT></td>
          </tr>
          

        </TABLE>
      </FORM>
    </center>
  </div>
</div>
</section> */}

var scrollY = 0;
var distance = 20;
var speed = 24;
function autoScrollTo (el){
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(el).offsetTop;
  var bodyHeight = document.body.offsetHeight;
  var yPros = currentY + window.innerHeight;
  var animator = setTimeout ('autoScrollTo(\''+el+'\')',speed);
  if (yPros > bodyHeight){
    clearTimeout (animator);
    appeared ('pika');
    dex ('dex');
  }
  else {
    if (currentY < targetY-distance){
      scrollY = currentY+distance;
      window.scroll(0, scrollY);
    }
    else {
      clearTimeout (animator);
    }
  }
}
function appeared (el){
  var elem = document.getElementById(el);
  elem.style.transition = "left 2.0s linear 0s";
  elem.style.left = "25%";
}
function dex (del){
  var delem = document.getElementById(del);
  delem.style.transition = "right 2.0s linear 3s";
  delem.style.right = "25%";
}
function avg (){
  var a = Calc.Input.value.toString();
  a=a.split("+");
  Calc.Input.value=eval(Calc.Input.value)/a.length;
}