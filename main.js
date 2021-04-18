canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="Empty";

var last_position_of_x,last_position_of_y;

var color="red";

var width_of_line="2";

var radius="20"

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius= document.getElementById("radius").value; 
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_X=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_Y=e.clientY-canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        console.log("Current position of X & Y = " );
        console.log("X = " + current_position_of_mouse_X + " Y = " + current_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_X , current_position_of_mouse_Y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_X , current_position_of_mouse_Y , radius , 0 , 2*Math.PI);
        ctx.stroke();
    }
}

function clearArea() {
     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }