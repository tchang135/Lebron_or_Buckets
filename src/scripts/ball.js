class Ball {
    constructor() {
      this.radius = 25;
      this.x = 0;
      this.y = 0;
      this.vx = 0;
      this.vy = 0;
      this.rotation = 0;
      this.color = 'orange';
      this.lineWidth = 1;
    }
  
    drawBall(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.lineWidth = this.lineWidth;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(200, 400, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      if (this.lineWidth > 0) {
        ctx.stroke();
      }
      ctx.restore();
    }

    getBounds() {
        return {
          x: this.x - this.radius,
          y: this.y - this.radius,
          width: this.radius * 2,
          height: this.radius * 2
        };
      }

    animate() {
        this.drawBall(ctx)
    }

    
}
    

export default Ball;