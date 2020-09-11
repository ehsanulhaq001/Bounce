function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.xv = 4 * speed;
    this.yv = -4 * speed;
    this.w = 20 * mobile;

    this.update = function() {

        if (this.x < this.w || this.x > cnv.width - this.w) {
            this.xv *= -1;
        }
        if (this.y < this.w || this.y > cnv.height - this.w) {
            this.yv *= -1;
        }

        this.x += this.xv;
        this.y += this.yv;
    }

    this.show = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.w, 0, 2 * Math.PI, true);
        ctx.fillStyle = "lime";
        ctx.fill();
    }
}