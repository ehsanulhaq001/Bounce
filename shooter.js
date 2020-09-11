function Shooter(x, y) {
    this.x = x;
    this.y = y;
    this.w = 100;
    this.xv = 0;
    this.show = function() {
        ctx.beginPath();
        ctx.rect(this.x - this.w, this.y, 2 * this.w, 10);
        ctx.fillStyle = "lime";
        ctx.fill();
    }
    this.update = function() {
        if (this.x < this.w) {
            this.x = this.w;
        }
        if (this.x > cnv.width - this.w) {
            this.x = cnv.width - this.w;
        }
        this.x += this.xv * speed;
    }
}