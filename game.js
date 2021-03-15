var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height/2;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleHeight1 = 75;
var paddleWidth1 = 10;
//var paddleX = (canvas.width-paddleWidth)/2;
var paddleX =canvas.width-paddleWidth1;
var paddleX2 = (canvas.height-paddleHeight1)/2;
var paddleX3 = (canvas.height-paddleHeight1)/2;
var dx = -2;
var dy = -2;
//new code
var paddleDx = 7;
var rightPressed;
var leftPressed;
var wPressed ;
var sPressed ;
var k = 0;
var m = 0;
//===========================================================================
//===========================================================================
function keyDownHandler(event)
{
if(event.keyCode == 40 )
{
rightPressed =true;
}
else if (event.keyCode ==38 )
{
leftPressed=true;
}}
function keyUpHandler(event)
{
if (event.keyCode== 40)
{
rightPressed =false;
}
else if (event.keyCode==38)
{
leftPressed=false;
}
}
//================================
function keyDown2Handler(event)
{
if(event.keyCode ==  87)
{
wPressed =true;
}
else if (event.keyCode ==83 )
{
sPressed=true;
}}
function keyUp2Handler(event)
{
if (event.keyCode== 87)
{
wPressed =false;
}
else if (event.keyCode==83)
{
sPressed=false;
}
}

document.addEventListener('keydown',keyDownHandler,false);
document.addEventListener('keyup',keyUpHandler,false);
document.addEventListener('keydown',keyDown2Handler,false);
document.addEventListener('keyup',keyUp2Handler,false);
//===========================================================================
//================================= Draw Ball ===============================
function drawBall(){
ctx.beginPath();
ctx.arc(x,y,ballRadius,0,Math.PI*2);
ctx.fillStyle="#EA008C";
ctx.fill();
ctx.closePath();
}
//================================= game net ===============================
function center(){
  for(let i = 0 ;i <canvas.height;i+=15){
  ctx.beginPath();
  ctx.rect(canvas.width/2,i,2,10);
  ctx.fillStyle="white";
  ctx.fill();
  ctx.closePath();}
}
//=======================paddle 1 =========================================
function drawPaddle(){
ctx.beginPath();
ctx.rect(paddleX,paddleX3,10,75);
ctx.fillStyle="red";
ctx.fill();
ctx.closePath();
}
//==============================paddle 2 ====================================
function drawPaddle1(){
ctx.beginPath();
ctx.rect(0,paddleX2,paddleWidth1,paddleHeight1);
ctx.fillStyle="red";
ctx.fill();
ctx.closePath();
}
//==============================Score player 1 =============================
function drawText()
{
  ctx.fillStyle="cyan";
  ctx.font = "48px Georgia";
  ctx.fillText(k, canvas.width/4,canvas.height/4);
}
//==============================Score player 2 =============================
function drawText1()
{
  ctx.fillStyle="cyan";
  ctx.font = "48px Georgia";
  ctx.fillText(m, (canvas.width*3)/4,canvas.height/4);
}
//============================== main draw function =========================
function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);
center()
drawPaddle1()
drawBall();
drawPaddle();
drawText();
drawText1();
//================================== move ball ==============================
x+=dx;
y+=dy;
//================================== code end ===============================
//===================================== ball hit bounce =====================
if (y+dy<ballRadius || y+dy > canvas.height - ballRadius)
{
dy=-dy;
}
//=============================================================code end
//====================================================paddle 1  move
if(rightPressed && paddleX2<(canvas.height-paddleHeight1))
{
paddleX2+=paddleDx;

}
if(leftPressed && paddleX2>0)
{
paddleX2-=paddleDx;

}
//==================================================paddle 2  move
if(sPressed && paddleX3<(canvas.height-paddleHeight1))
{
paddleX3+=paddleDx;

}
if(wPressed && paddleX3>0)
{
paddleX3-=paddleDx;
}

//===================================================paddle 1 bounce
if(x + dx<paddleWidth1 &&
  y+dy>paddleX2 &&
  y+dy < (paddleX2+paddleHeight1))
{
k++;
dx= -dx;
}
else if ( x+dx > canvas.width - ballRadius &&
          y+dy>paddleX3 &&
          y+dy < (paddleX3+paddleHeight1))
{
  m++;
  dx= -dx;
}
else if(x + dx >canvas.width || x + dx <0)
{
location.reload();
alert("GaMe OvEr Final Score :  Player 1 ="+k+"  player 2 : "+m);
}
requestAnimationFrame(draw);

}
requestAnimationFrame(draw);
//===============================================================================
