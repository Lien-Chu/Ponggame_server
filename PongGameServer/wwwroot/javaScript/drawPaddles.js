// Get the canvas element
const canvas = document.getElementById("canvas");

// get 2D drawing context
const ctx = canvas.getContext("2d");
let _ballX = 320;
let _ballY = 140;
let ballDX;
let ballDY;

let paddle_l = {
    x: 15,
    y: 100,
    width: 10,
    height: 80,
    speed: 20
};
let paddle_r = {
    x: 615,
    y: 100,
    width: 10,
    height: 80,
    speed: 20
};

function drawPaddles() {

    // Draw paddles
    ctx.fillStyle = "green";
    ctx.fillRect(paddle_l.x, paddle_l.y, paddle_l.width, paddle_l.height);
    ctx.fillRect(paddle_r.x, paddle_r.y, paddle_r.width, paddle_r.height);

    requestAnimationFrame(drawPaddles);
}

requestAnimationFrame(drawPaddles);

