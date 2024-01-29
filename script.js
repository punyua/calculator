let display=document.getElementById("display1");

let calculate=(number)=>{
    display.value=display.value+number;
}
let result=()=>{
    try{
        display.value=eval(display.value);
    } catch(e){
     display.value="maths error";
    }
}
function c(){
display.value=" ";
}

function del(){
    display.value=display.value.slice(0, -1);
    }