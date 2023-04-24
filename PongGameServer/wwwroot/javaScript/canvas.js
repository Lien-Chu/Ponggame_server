// Get the canvas element
const canvas = document.getElementById("canvas");

// get 2D drawing context
const ctx = canvas.getContext("2d");
let _ballX = 320;
let _ballY = 140;
let _player1Y = 100;
let _player2Y = 100;
let ballDX = 5;
let ballDY = 5;


function draw() {

    // Draw background
    ctx.clearRect(0, 0, 640, 280);
    ctx.strokeRect(0, 0, 640, 280);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.7;
    ctx.beginPath();
    ctx.moveTo(320, 0);
    ctx.lineTo(320, 280);
    ctx.stroke();

    // Draw ball
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(_ballX, _ballY, 5, 0, 2 * Math.PI);
    ctx.fill();

    // Draw paddles
    ctx.fillStyle = "red";
    ctx.fillRect(15, 100, 10, 80);
    ctx.fillRect(615, 100, 10, 80);

    _ballX += ballDX;
    _ballY += ballDY;

    // Bounces when hitting on the walls
    if (_ballY < 0 || _ballY > 280) {
        ballDY = -ballDY;
    }
    if (_ballX < 0 || _ballX > 640) {
        ballDX = -ballDX;
        /* await hubConnection.SendAsync("MoveBall", _ballX, _ballY);*/
    }
    // Bounces when hitting on paddles
    if (_ballX < 25 && _ballY > _player1Y && _ballY < _player1Y + 80) {
        ballDX = -ballDX;
    }
    if (_ballX > 615 && _ballY > _player2Y && _ballY < _player2Y + 80) {
        ballDX = -ballDX;
    }


 

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);






