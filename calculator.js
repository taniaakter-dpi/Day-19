 var d = document.getElementById("display");

 function NumClick(x){
    d.value = d.value + "" +x;

}
var op ="";
var firstValue ="";
var secondValue ="";

function Sum(){
    op = "sum";
    firstValue = d.value;
    Clr();
}
function Sub(){
    op = "sub";
    firstValue = d.value;
    Clr();
}
function Mul(){
    op = "mul";
    firstValue = d.value;
    Clr();

}
function Div(){
    op = "div";
    firstValue = d.value;
    Clr();
}
function Equal(){
    secondValue = parseInt(d.value);
    firstValue = parseInt(firstValue);
      if(op == "sum"){d.value = firstValue + secondValue;}
      if(op == "sub"){d.value = firstValue - secondValue;}
      if(op == "mul"){d.value = firstValue * secondValue;}
      if(op == "div"){d.value = firstValue / secondValue;}
}
function Clr(){
    d.value = "";
}