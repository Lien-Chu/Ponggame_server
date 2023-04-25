// Get the canvas element
const canvas = document.getElementById("canvas");

// get 2D drawing context
const ctx = canvas.getContext("2d");

let _ballX = 320;
let _ballY = 140;
let ballDX = 2;
let ballDY = 2;
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
function DrawBall() {

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(_ballX, _ballY, 5, 0, 2 * Math.PI);
    ctx.fill();
    _ballX += ballDX;
    _ballY += ballDY;


    // Draw paddles
    ctx.fillStyle = "green";
    ctx.fillRect(paddle_l.x, paddle_l.y, paddle_l.width, paddle_l.height);
    ctx.fillRect(paddle_r.x, paddle_r.y, paddle_r.width, paddle_r.height);

    // Bounces when hitting on the walls
    if (_ballY < 5 || _ballY > 275) {
        ballDY = -ballDY;
    }
    if (_ballX < 5 || _ballX > 635) {
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
    requestAnimationFrame(DrawBall)
}

requestAnimationFrame(DrawBall)

/*function moveLeftPaddle() {*/
    document.addEventListener("keydown", function (event) {
        if (event.code === "KeyW") {
            paddle_l.y -= paddle_l.speed;
            // let paddle not go out of the canvas
            if (paddle_l.y < 0) {
                paddle_l.y = 0;
            } else if (paddle_l.y > 200) {
                paddle_l.y = 200;
            }
            hubConnection.send("MovePaddle", 1, paddle_l.y - paddle_l.speed);
        } else if (event.code === "KeyS") {
            paddle_l.y += paddle_l.speed;
            // let paddle not go out of the canvas
            if (paddle_l.y < 0) {
                paddle_l.y = 0;
            } else if (paddle_l.y > 200) {
                paddle_l.y = 200;
            }
            hubConnection.send("MovePaddle", 1, paddle_l.y + paddle_l.speed);
        }
    });
/*}*/

//function moveRightPaddle() {
    document.addEventListener("keydown", function (event) {
        if (event.code === "ArrowUp") {
            paddle_r.y -= paddle_r.speed;
            // let paddle not go out of the canvas
            if (paddle_r.y < 0) {
                paddle_r.y = 0;
            } else if (paddle_l.y > 200) {
                paddle_r.y = 200;
            }
            hubConnection.send("MovePaddle", 1, paddle_r.y - paddle_r.speed);
        } else if (event.code === "ArrowDown") {
            paddle_r.y += paddle_r.speed;
            // let paddle not go out of the canvas
            if (paddle_r.y < 0) {
                paddle_r.y = 0;
            } else if (paddle_r.y > 200) {
                paddle_r.y = 200;
            }
            hubConnection.send("MovePaddle", 1, paddle_r.y + paddle_r.speed);
        }
    });
/*}*/

