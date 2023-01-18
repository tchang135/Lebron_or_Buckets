class Hoop {
    constructor() { 
    this.xLeft = 790;
    this.xRight = 910
	this.y = 300;
	// this.endX = 200;
	// this.endY = 400;
};

    drawHoop(ctx) { 
        ctx.beginPath();
        ctx.fillStyle = 'orange'
        ctx.fillRect(this.xLeft, this.y, 120, 10)
        
    }

    hitRim() {

        //check if the ball object hits the rim at either corner or on the backboard
    }

    score() {
        //check if ball object completely passes through the hoop, then add point 

    }
}

export default Hoop;
