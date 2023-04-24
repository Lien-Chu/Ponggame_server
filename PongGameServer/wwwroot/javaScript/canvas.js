// 獲取canvas元素
const canvas = document.getElementById("canvas");

// 獲取2D繪圖上下文
const ctx = canvas.getContext("2d");

// 繪製長方形
ctx.strokeStyle = "black";
// 繪製矩形
ctx.strokeRect(0, 0, 640, 280);
// 繪製線段
ctx.beginPath();
ctx.moveTo(320, 0);
ctx.lineTo(320, 280);
ctx.stroke();

// 繪製圓形
ctx.beginPath();
ctx.arc(320, 140, 5, 0, 2 * Math.PI);
ctx.stroke();

// 繪製兵乓球拍
//填滿紅色
ctx.strokeStyle = "red";
ctx.strokeRect(15, 100, 20, 80);
ctx.strokeRect(605, 100, 20, 80);



