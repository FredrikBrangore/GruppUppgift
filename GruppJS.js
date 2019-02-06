// letiabler
//Tre rader som byter färg till gul när man trycker på den raden
let rad1 = document.getElementById("rad1");
let rad2 = document.getElementById("rad2");
let rad3 = document.getElementById("rad3");

rad1.addEventListener(
  "click",
  function() {
    rad1.style.backgroundColor = "yellow";
    rad2.style.backgroundColor = "white";
    rad3.style.backgroundColor = "white";
  },
  false
);

rad2.addEventListener(
  "click",
  function() {
    rad1.style.backgroundColor = "white";
    rad2.style.backgroundColor = "yellow";
    rad3.style.backgroundColor = "white";
  },
  false
);

rad3.addEventListener(
  "click",
  function() {
    rad1.style.backgroundColor = "white";
    rad2.style.backgroundColor = "white";
    rad3.style.backgroundColor = "yellow";
  },
  false
);

//Rutan där man klickar för att byta bakgrundsfärg i rutan
let ruta = document.getElementById("box");
let nr = 0;

ruta.addEventListener(
  "click",
  function() {
    if (nr == 0) {
      ruta.style.backgroundColor = getRandomColor();
      nr = 1;
    } else {
      ruta.style.backgroundColor = getRandomColor();
      nr = 0;
    }
  },
  false
);

//funktion för att slumpa färg
function getRandomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}

//Ruta2 vilket är rutan med mouseover och mouseout event
let ruta2 = document.getElementById("box2");

ruta2.addEventListener(
  "mouseover",
  function() {
    ruta2.style.backgroundColor = "red";
    ruta2.style.color = "white";
    ruta2.childNodes[1].innerHTML = "Mouseover";
    
  },
  false
);

ruta2.addEventListener(
  "mouseout",
  function() {
    ruta2.style.backgroundColor = "green";
    ruta2.style.color = "hotpink";
    ruta2.childNodes[1].innerHTML = "MouseOut"
  },
  false
);

// Rutan där man kan rita vad man vill
canvas = document.getElementById("canvas");
c = canvas.getContext("2d");

//letiabler som används inom diverse funktioner
let pos; //position
let klottra = false;
let lw = 1; //lineWidth

canvas.addEventListener(
  "mousedown",
  function(evt) {
    //börja rita
    klottra = true; //ok att börja rita
    pos = mPos(evt); //hämta in som en array med x och y position
    c.moveTo(pos.x, pos.y); //börja linjen
  },
  false
);

canvas.addEventListener(
  "mouseup",
  function(evt) {
    //sluta rita när man inte håller ner vänsterklick

    klottra = false;
  },
  false
);

canvas.addEventListener(
  "mousemove",
  function(evt) {
    //rita
    if (klottra) {
      pos = mPos(evt);
      c.lineTo(pos.x, pos.y);
      c.lineWidth = lw;
      c.strokeStyle = "black";
      c.stroke();
    }
  },
  false
);

function mPos(evt) {
  //mousePosition

  let rek = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rek.left,
    y: evt.clientY - rek.top
  };
}

var fired = false;
window.onkeyup = function() {
  fired = false;
};
//Ruta3 som gör att när du trycker ner en valfri tangent så ändras färgen i rutan
let ruta3 = document.getElementById("box3");
window.addEventListener("keydown", function() {
  if (!fired) {
    fired = true;
    ruta3.style.backgroundColor = getRandomColor();
  }
}),
  false;

//funktion för att skicka alert när ett värde ändras
function ourFunction(inmatning) {
  alert("Värdet har ändrats. Nya värdet är " + inmatning);
}

//funktion för onload event
function myFunction() {
  alert("Hej och välkomna till leklandet");
}

//funktion för att rensa canvas-rutan
function rensa() {
  c.beginPath();
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.closePath();
}

var ruta4 = document.getElementById("box4");
// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(ruta4);

// listen to events...
mc.on("panleft panright tap press", function(ev) {
  
  ruta4.childNodes[0].innerHTML =  ev.type + " gesture detected.";
  if (ruta4.childNodes[0].innerHTML == "panright gesture detected.") {
    ruta4.childNodes[0].innerHTML = "Swipa Höger"
    ruta4.style.backgroundColor = "violet";
  } else if (ruta4.childNodes[0].innerHTML == "press gesture detected.") {
    ruta4.childNodes[0].innerHTML = "Håll Ner"
    ruta4.style.backgroundColor = "yellow";
  } else if (ruta4.childNodes[0].innerHTML == "panleft gesture detected.") {
    ruta4.childNodes[0].innerHTML = "Swipa Vänster"
    ruta4.style.backgroundColor = "red";
  } else {
    ruta4.childNodes[0].innerHTML = "Tappa"
    ruta4.style.backgroundColor = getRandomColor();
  }
});

canvas1 = document.getElementById("canvas1");
c1 = canvas1.getContext("2d");

var xpos = 300;
var img1 = new Image();
img1.src = "Images/overworld_bg.png";
img1.onload = function() {
/*   drawImage(bild, x-start, y-start, bredd, höjd,
     x-position där bilden ska visas, y-position där bilden ska visas, bredd, höjd) */
  c1.drawImage(img1, 0, 0, 600, 400);
};

var xpos = 300;
var frame = 96; //bildruta kommer att förändras med 32 varje gång
var img = new Image();
img.src = "Images/mario1.png";
img.onload = function() {
/*   drawImage(bild, x-start, y-start, bredd, höjd,
     x-position där bilden ska visas, y-position där bilden ska visas, bredd, höjd) */
  c1.drawImage(img, frame, 0, 32, 64, xpos, 275, 32, 64);
};

c1.moveTo(0, 264);
c1.lineTo(600, 264);
c1.stroke();

window.addEventListener(
  "keydown",
  event => {
    /* var key = event.keyCode || event.key; Denna kod funka inte i Firefox så ändre till nedan
    då funkar det i Firefox och Chrome. */
    if (event.isComposing || event.keyCode === 39) {
      //höger
      goRight = window.requestAnimationFrame(right);
    } else if (event.isComposing || event.keyCode === 37) {
      //vänster
      goLeft = window.requestAnimationFrame(left);
    }
  },
  false
);

window.addEventListener(
  "keyup",
  function() {
    sudda();
    c1.drawImage(img1, 0, 0, 600, 400);
    c1.drawImage(img, 96, 0, 32, 64, xpos, 275, 32, 64);
  },
  false
);

function sudda() {
  c1.clearRect(0, 0, 600, 400);
  c1.moveTo(0, 264); //skapa en linje som han går på
  c1.lineTo(600, 264); //skapa en linje som han går på
  c1.stroke(); //skapa en linje som han går på
}

function left() {
  sudda();
  c1.drawImage(img1, 0, 0, 600, 400);
  c1.drawImage(img, 0 + frame, 0, 32, 64, xpos, 275, 32, 64);
  var nu = new Date().valueOf(); // ValueOf = Tid i millisekunder
  frame = 32 * (Math.floor(nu / 100) % 3);
  xpos -= 25;
  if (xpos < -40) xpos = 640;
}

function right() {
  sudda();
  c1.drawImage(img1, 0, 0, 600, 400);
  c1.drawImage(img, 192 - frame, 0, 32, 64, xpos, 275, 32, 64);
  var nu = new Date().valueOf(); // ValueOf = Tid i millisekunder
  frame = 32 * (Math.floor(nu / 100) % 3);
  xpos += 25;
  if (xpos > 640) xpos = -40;
}

/*   window.addEventListener("keydown",function(){
    let key = event.keyCode;
    let alfa;
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
