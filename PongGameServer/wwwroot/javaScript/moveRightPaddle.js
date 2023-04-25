function moveRightPaddle() {
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
}