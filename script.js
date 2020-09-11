let bx, by;
let sx, sy;
let cnv = document.querySelector("#canvas");
let ctx = cnv.getContext("2d");
let speed = document.querySelector("#speed").value;
let mobile = 0.5;
cnv.width = window.innerWidth;
let mobwid = cnv.width;
cnv.height = window.innerHeight;
cnv.style.backgroundColor = "black";
document.addEventListener("keydown", keyPush);
start();

function start() {
    setup();
    draw();
}

function setup() {
    if (mobwid < 1000) {
        mobile = 0.5;
    } else {
        mobile = 1;
    }
    bx = cnv.width / 2;
    by = cnv.height * 5 / 6;
    sx = cnv.width / 2;
    sy = cnv.height * 9 / 10;
    ball = new Ball(bx, by);
    shooter = new Shooter(sx, sy);
}

function draw() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    setBackground();
    ball.show();
    ball.update();
    shooter.show();
    shooter.update();
    checkForHit();
    checkForMiss();
    if (speed != document.querySelector("#speed").value) {
        speed = document.querySelector("#speed").value;
        start();
    } else {
        requestAnimationFrame(draw);
    }
}

function keyPush(e) {
    switch (e.keyCode) {
        case 37:
            shooter.x -= 10;
            shooter.xv = -4;
            break;

        case 39:
            shooter.x += 10;
            shooter.xv = 4;
            break;

        default:
            break;
    }
}

function checkForHit() {
    if ((ball.x > shooter.x - shooter.w && ball.x < shooter.x + shooter.w) && ball.y > shooter.y - ball.w) {
        ball.yv *= -1;
    }
}

function checkForMiss() {
    if (ball.y > shooter.y) {
        return true;
    }
    return false;
}

function setBackground() {
    if (checkForMiss()) {
        color1 = "red";
        color2 = "orange"
    } else {
        color1 = "rgb(30, 70,100)";
        color2 = "rgb(10, 120,100)";
    }
    ctx.beginPath();

    ctx.moveTo(0, cnv.height * 1 / 6);
    ctx.lineTo(cnv.width, cnv.height * 1 / 6);
    ctx.moveTo(0, cnv.height * 2 / 6);
    ctx.lineTo(cnv.width, cnv.height * 2 / 6);
    ctx.moveTo(0, cnv.height * 3 / 6);
    ctx.lineTo(cnv.width, cnv.height * 3 / 6);
    ctx.moveTo(0, cnv.height * 4 / 6);
    ctx.lineTo(cnv.width, cnv.height * 4 / 6);
    ctx.moveTo(0, cnv.height * 5 / 6);
    ctx.lineTo(cnv.width, cnv.height * 5 / 6);
    ctx.moveTo(cnv.width * 1 / 6, 0);
    ctx.lineTo(cnv.width * 1 / 6, cnv.height);
    ctx.moveTo(cnv.width * 2 / 6, 0);
    ctx.lineTo(cnv.width * 2 / 6, cnv.height);
    ctx.moveTo(cnv.width * 3 / 6, 0);
    ctx.lineTo(cnv.width * 3 / 6, cnv.height);
    ctx.moveTo(cnv.width * 4 / 6, 0);
    ctx.lineTo(cnv.width * 4 / 6, cnv.height);
    ctx.moveTo(cnv.width * 5 / 6, 0);
    ctx.lineTo(cnv.width * 5 / 6, cnv.height);

    ctx.strokeStyle = color1;
    ctx.stroke();

    ctx.beginPath();

    ctx.moveTo(0, cnv.height * 1 / 12);
    ctx.lineTo(cnv.width, cnv.height * 1 / 12);
    ctx.moveTo(0, cnv.height * 3 / 12);
    ctx.lineTo(cnv.width, cnv.height * 3 / 12);
    ctx.moveTo(0, cnv.height * 5 / 12);
    ctx.lineTo(cnv.width, cnv.height * 5 / 12);
    ctx.moveTo(0, cnv.height * 7 / 12);
    ctx.lineTo(cnv.width, cnv.height * 7 / 12);
    ctx.moveTo(0, cnv.height * 9 / 12);
    ctx.lineTo(cnv.width, cnv.height * 9 / 12);
    ctx.moveTo(0, cnv.height * 11 / 12);
    ctx.lineTo(cnv.width, cnv.height * 11 / 12);
    ctx.moveTo(cnv.width * 1 / 12, 0);
    ctx.lineTo(cnv.width * 1 / 12, cnv.height);
    ctx.moveTo(cnv.width * 3 / 12, 0);
    ctx.lineTo(cnv.width * 3 / 12, cnv.height);
    ctx.moveTo(cnv.width * 5 / 12, 0);
    ctx.lineTo(cnv.width * 5 / 12, cnv.height);
    ctx.moveTo(cnv.width * 7 / 12, 0);
    ctx.lineTo(cnv.width * 7 / 12, cnv.height);
    ctx.moveTo(cnv.width * 9 / 12, 0);
    ctx.lineTo(cnv.width * 9 / 12, cnv.height);
    ctx.moveTo(cnv.width * 11 / 12, 0);
    ctx.lineTo(cnv.width * 11 / 12, cnv.height);

    ctx.strokeStyle = color2;;
    ctx.stroke();
}