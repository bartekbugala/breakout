export function BallMovement(ctx, ballObj) {
  const ball = new Ball(ballObj.x, ballObj.y, ballObj.rad, ballObj.color);
  ball.draw(ctx);
  ballObj.x += ballObj.dx
  ballObj.y += ballObj.dy
}

class Ball {
  constructor(x, y, rad, color) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.color = [color[0], color[1]];
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);

    // stroke
    ctx.strokeStyle = this.color[0];
    ctx.lineWidth = 4;
    ctx.stroke();

    // fill
    ctx.fillStyle = this.color[1];
    ctx.fill();
  }
}
