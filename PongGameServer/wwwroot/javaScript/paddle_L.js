function MoveLeftPaddle() {
    document.addEventListener("keydown", function (event) {
        if (event.code === "ArrowUp") {
            paddle_l.y -= paddle_l.speed;
            // let paddle not go out of the canvas
            if (paddle_l.y < 0) {
                paddle_l.y = 0;
            } else if (paddle_l.y > 200) {
                paddle_l.y = 200;
            }
            hubConnection.send("MovePaddle", 1, paddle_l.y - paddle_l.speed);
        } else if (event.code === "ArrowDown") {
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
}