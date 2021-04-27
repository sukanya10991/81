canvas = document.getElementById("i");
ctx = canvas.getContext("2d");
color = "#3921b0";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(200,100,40,0,2*Math.PI);
ctx.stroke();
mouse_x= 200;
mouse_y =100;
mouse_x1=300;
mouse_y1=200;
color1="#e2e615";
mouse_x2=400;
mouse_y2=100;
color2="#000000";
mouse_x3=500;
mouse_y3=200;
color3="#3a7035";
mouse_x4=600;
mouse_y4=100;
color4="#eb0c1e";
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
}
function circle(mouse_x1,mouse_y1){
    ctx.beginPath();
    ctx.strokeStyle = color1;
    ctx.lineWidth = 4;
    ctx.arc(mouse_x1,mouse_y1,40,0,2*Math.PI);
    ctx.stroke();
}
function circle(mouse_x2,mouse_y2){
    ctx.beginPath();
    ctx.strokeStyle = color2;
    ctx.lineWidth = 4;
    ctx.arc(mouse_x2,mouse_y2,40,0,2*Math.PI);
    ctx.stroke();
}
function circle(mouse_x3,mouse_y3){
    ctx.beginPath();
    ctx.strokeStyle = color3;
    ctx.lineWidth = 4;
    ctx.arc(mouse_x3,mouse_y3,40,0,2*Math.PI);
    ctx.stroke();
}
function circle(mouse_x4,mouse_y4){
    ctx.beginPath();
    ctx.strokeStyle = color4;
    ctx.lineWidth = 4;
    ctx.arc(mouse_x4,mouse_y4,40,0,2*Math.PI);
    ctx.stroke();
}
