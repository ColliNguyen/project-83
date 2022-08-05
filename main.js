
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

var width = screen.width;
var height = screen.height;
var new_width = screen.width-70;
var new_height = screen.height-300;

if(width < 992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
canvas.addEventListener("touchstart", my_touchstart);
}

function my_touchstart(e)
{
    //Addictonal Activity start
    color = document.getElementById("inputcolor").value;
    width_of_line = document.getElementById("line_width").value;
    //Addictonal Activity ends
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;

}


canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{

     current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

   
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();

    last_position_of_x = current_position_of_mouse_x; 
    last_position_of_y = current_position_of_mouse_y;
}

function clear_canvas(){
    ctx.clearRect(0,0, canvas.width,canvas.height);
}

var mouseEvent="";
var LastPositionX;
var LastPositionY;


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
    color=document.getElementById("inputcolor").value;
    line_width=document.getElementById("line_width").value;
    radius=document.getElementById("Circle_radius").value;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouse_leave);
function my_mouse_leave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    CurrentPositionOfMouseX=e.clientX-canvas.offsetLeft;
    CurrentPositionOfMouseY=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        CurrentPositionOfMouseX = e.clientX - canvas.offsetLeft;
        CurrentPositionOfMouseY = e.clientY - canvas.offsetTop;

        if(mouseEvent == "mousedown"){
            console.log("Current position of x and y coordinates=");
            console.log("x = " + CurrentPositionOfMouseX + "y = " + 
            CurrentPositionOfMouseY);
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.line_width = line_width;
            ctx.arc(CurrentPositionOfMouseX,CurrentPositionOfMouseY, radius,0,2*Math.PI);
            ctx.stroke();
        }


    }
    LastPositionX=CurrentPositionOfMouseX;
    LastPositionY=CurrentPositionOfMouseY;
}

function clear_canvas(){
    ctx.clearRect(0,0, canvas.width,canvas.height);
}

