var n=Math.random();
var n3=Math.random();

var n1=Math.floor(n * 6) + 1;
var n2=Math.floor(n3 * 6) + 1;
if(n1>n2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}else if(n2>n1){
    document.querySelector("h1").innerHTML="Player 2 wins";
}else{
    document.querySelector("h1").innerHTML="Oops!! It's a TIE!";
}


if (n2 == 1)
{
   document.querySelector(".img2").setAttribute("src","images/dice1.png");
}else if(n2==2)
{
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
}else if(n2==3)
{
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
}else if(n2==4)
{
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
}else if(n2==5)
{
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
}else 
{
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
}



if (n1 == 1)
{
   document.querySelector(".img1").setAttribute("src","images/dice1.png");
}else if(n1==2)
{
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
}else if(n1==3)
{
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
}else if(n1==4)
{
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
}else if(n1==5)
{
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
}else 
{
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
}
