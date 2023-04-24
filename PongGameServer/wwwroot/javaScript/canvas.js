// Get the canvas element
const canvas = document.getElementById("canvas");

// get 2D drawing context
const ctx = canvas.getContext("2d");
let _ballX = 320;
let _ballY = 140;
let ballDX = 3;
let ballDY = 3;

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
    ctx.fillStyle = "green";
    ctx.fillRect(paddle_l.x, paddle_l.y, paddle_l.width, paddle_l.height);
    ctx.fillRect(paddle_r.x, paddle_r.y, paddle_r.width, paddle_r.height);

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
    if (_ballX < 25 && _ballY > paddle_l.y && _ballY < paddle_l.y + 80) {
        ballDX = -ballDX;
    }
    if (_ballX > 615 && _ballY > paddle_r.y && _ballY < paddle_r.y + 80) {
        ballDX = -ballDX;
    }
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowUp") {
        paddle_l.y -= paddle_l.speed;
    } else if (event.code === "ArrowDown") {
        paddle_l.y += paddle_l.speed;
    }
});

//document.addEventListener("keydown", function (event) {
//    if (event.code === "ArrowUp") {
//        hubConnection.send("MovePaddle", 1, paddle_l.y - paddle_l.speed);
//    } else if (event.code === "ArrowDown") {
//        hubConnection.send("MovePaddle", 1, paddle_l.y + paddle_l.speed)
//    }
//});

//document.addEventListener("keydown", function (event) {
//    if (event.code === "ArrowUp")
//        hubConnection.send("MovePaddle", 2, paddle_r.y - paddle_r.speed);
//    else if (event.code === "ArrowDown")
//        hubConnection.send("MovePaddle", 2, paddle_r.y + paddle_r.speed);
//});



//private async Task OnKeyDown(KeyboardEventArgs e)
//{

//    if (e.Code == "ArrowUp") {
//        if (hubConnection is not null)
//        {
//            await hubConnection.SendAsync("MovePaddle", 1, paddle_l - 20);
//        }
//    }
//    else if (e.Code == "ArrowDown") {
//        if (hubConnection is not null)
//        {
//            await hubConnection.SendAsync("MovePaddle", 1, paddle_l + 20);
//        }
//    }
//}

