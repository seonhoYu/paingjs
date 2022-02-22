
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

ctx.width = CANVAS_SIZE;
ctx.height = CANVAS_SIZE;
ctx.fillStyle = "white";
ctx.fillRect(0,0, canvas.width, canvas.height);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
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
    ctx.fillStyle = ctx.strokeStyle;
}

function handleRangeChange(event){
    const lineWidth = event.target.value;
    ctx.lineWidth = lineWidth;
}

function handleCanvasClick(event){
    if(filling){
        ctx.fillRect(0,0, canvas.width, canvas.height);
    }
}

function handleCM(event){
    event.preventDefault();
}

function handleSaveClick(event){
    const image = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = image;
    link.download = "image.jpeg";
    link.click();
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
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}


Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if(range){
    range.addEventListener('change', handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleMode);
}

