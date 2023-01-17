class Hoop {
    constructor() { 
    this.x = 790;
	this.y = 300;
	// this.endX = 200;
	// this.endY = 400;
};

    drawHoop(ctx) { 
        ctx.beginPath();
        ctx.fillStyle = 'orange'
        ctx.fillRect(this.x, this.y, 120, 10)
        
        ctx.beginPath();
        ctx.fillStyle = 'grey'
        ctx.fillRect(this.x + 120, this.y - 90, 10, 110)
       
    }

    hitRim() {
        //check if the ball object hits the rim at either corner or on the backboard
    }

    score() {
        //check if ball object completely passes through the hoop, then add point 
        
    }
}

export default Hoop;
