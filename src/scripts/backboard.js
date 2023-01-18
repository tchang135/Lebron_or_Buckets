class Backboard {
    constructor() {
    this.x = 910;
	this.yBottom = 210;
    this.yTop = 320
    }


    drawBack(ctx) {
        ctx.beginPath();
        ctx.fillStyle = 'grey'
        ctx.fillRect(this.x, this.yBottom, 10, 110)
    }

    // animate() {
    //     this.drawBack(ctx)
    // }
}


export default Backboard;