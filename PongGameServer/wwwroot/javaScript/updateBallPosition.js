function updateBallPosition(ballX, ballY) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(ballX, ballY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
}
