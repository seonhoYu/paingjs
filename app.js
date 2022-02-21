const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#000";
ctx.lineWidth = 2.5;

let painting = false;

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
       ctx.beginPath();
       ctx.moveTo(x, y);
    }
    else{
        ctx.lineTo(x,y);
        
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