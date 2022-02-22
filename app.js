
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

ctx.width = 700;
ctx.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
       ctx.beginPath();
       ctx.moveTo(x, y);
    }
    else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
    
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

function handleRangeChange(event){
    const lineWidth = event.target.value;
    ctx.lineWidth = lineWidth;
}

function handleMode(event){
    if(filling == true){
        filling = false;
        mode.innerText = "FILL";
    }
    else{
        filling = true;
        mode.innerText = "PAINT";
    }
}

function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}


Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if(range){
    range.addEventListener('change', handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleMode);
}

