var canvas=document.getElementById("my_canvas");
var color, width, radius;
var ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_x, last_y;
var current_x, current_y;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        

        console.log("last position of x and y");
        console.log("x = "+last_x+", y = "+last_y);
        

        console.log("current position of x and y");
        console.log("x = "+current_x+", y = "+current_y);
        
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(current_x,current_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}