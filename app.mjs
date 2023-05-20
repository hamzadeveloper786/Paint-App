let canvas = document.querySelector("#canvas");
let increseElement = document.querySelector("#increase");
let decreaseElement = document.querySelector("#decrease");
let colorElement = document.querySelector("#color");
let sizeElement = document.querySelector("#size");
let clearElement = document.querySelector("#clear");

let ctx = canvas.getContext('2d');
let size = 10;
let isPressed = false;
colorElement.value = 'black';
let color = colorElement.value;
let x;
let y;
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
    console.log(x,y);
})
document.addEventListener('mouseup', (e) =>{
    isPressed = false;
    x = undefined;
    y = undefined;
    console.log(x,y);
})

canvas.addEventListener('mousemove', (e)=>{
    if(isPressed){
        const x2 = e.offsetX;;
        const y2 = e.offsetY;
        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);
        x = x2;
        y = y2;
    }
})

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc( x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function updateSizeOnScreen(){
    sizeElement.innerText = size;
}

increseElement.addEventListener('click', () =>{
    size += 5;
    if(size > 50){
        size = 50;
    }
    updateSizeOnScreen();
})

decreaseElement.addEventListener('click', () =>{
    size -= 5;
    if(size < 5){
        size = 5;
    }
    updateSizeOnScreen();
})

colorElement.addEventListener('change', (e) => color = e.target.value);
clearElement.addEventListener('click', ()=> ctx.clearRect(0, 0, canvas.width, canvas.height))