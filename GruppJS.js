

// Variabler
//Tre rader som byter färg till gul när man trycker på den raden
var rad1 = document.getElementById("rad1");
var rad2 = document.getElementById("rad2");
var rad3 = document.getElementById("rad3");


rad1.addEventListener("click",function(){
rad1.style.backgroundColor="yellow";
rad2.style.backgroundColor="white";
rad3.style.backgroundColor="white";
},false);

rad2.addEventListener("click",function(){
    rad1.style.backgroundColor="white";
    rad2.style.backgroundColor="yellow";
    rad3.style.backgroundColor="white";
},false);

rad3.addEventListener("click",function(){
    rad1.style.backgroundColor="white";
    rad2.style.backgroundColor="white";
    rad3.style.backgroundColor="yellow";
},false);

//Rutan där man klickar för att byta bakgrundsfärg i rutan
var ruta = document.getElementById("box");
var nr = 0;

 ruta.addEventListener("click",function()
{ 
    if(nr == 0){
        ruta.style.backgroundColor=getRandomColor();
        nr = 1;
    }
    else{
        ruta.style.backgroundColor=getRandomColor();
        nr=0;
    }

},false);  

//funktion för att slumpa färg
function getRandomColor () {
    for(var i = 0; i<1; i++){

        var hex = Math.floor(Math.random() * 0xFFFFFF); 
    }
        
        return "#" + ("000000" + hex.toString(16)).substr(-6);
 
  }
 
/*   window.addEventListener("keydown",function(){
    var key = event.keyCode;
    var alfa;
    switch (key) {
        case 32:
            alfa = "Space";
            break;
        case 27:
            alfa = "ESC";
            break;
        default: alfa = String.fromCharCode(key);
    }
    ruta.innerHTML+="Du tryckte på"+alfa+"<br>";
}); */

//Ruta2 vilket är rutan med mouseover och mouseout event
var ruta2 = document.getElementById("box2");


ruta2.addEventListener("mouseover",function(){
    ruta2.style.backgroundColor="red";
    ruta2.style.color="white";
    
    ruta2.innerHTML="<h3>Mouseover</h3>"
},false);

ruta2.addEventListener("mouseout",function(){
    ruta2.style.backgroundColor="green";
    ruta2.style.color="black";
    ruta2.innerHTML="<h3>Mouseout</h3>"
},false);

// Rutan där man kan rita vad man vill
canvas = document.getElementById("canvas");
c = canvas.getContext("2d");

//variabler som används inom diverse funktioner
var pos;   //position
var klottra = false;
var lw=1; //lineWidth

window.addEventListener("keydown",function()
{
	key=event.keyCode;
	if(key==38) lw=lw+1;
	if(key==40 && lw>1) lw=lw-1;
});

canvas.addEventListener("mousedown",function(evt)
{
	//börja rita
	klottra=true;  //ok att börja rita
	pos=mPos(evt);  //hämta in som en array med x och y position

	c.moveTo(pos.x,pos.y);  //börja linjen
},false);
canvas.addEventListener("mouseup",function(evt)
{
	//sluta rita när man inte håller ner vänsterklick

	klottra = false;
},false);

canvas.addEventListener("mousemove",function(evt)
{
    //rita
	if(klottra)
	{
        pos=mPos(evt);
        c.lineTo(pos.x,pos.y);
        c.lineWidth=lw;
        c.strokeStyle="black";
        c.stroke();
	}


},false);

function mPos(evt) {     //mousePosition

    var rek = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rek.left,
    	y: evt.clientY - rek.top
			};
};


//Ruta3 som gör att när du trycker ner en valfri tangent så ändras färgen i rutan
var ruta3 = document.getElementById("box3");
window.addEventListener("keydown",random_bg_color);


function random_bg_color() {
	
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
    ruta3.style.background = bgColor;
    }

random_bg_color();

//funktion för att skicka alert när ett värde ändras
function ourFunction(inmatning){
    
    alert("Värdet har ändrats. Nya värdet är " + inmatning);
}

//funktion för onload event
function myFunction(){
    alert("Hej och välkomna till leklandet");
}