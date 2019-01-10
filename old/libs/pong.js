
/* This script has been written many, many, many years ago. Be indulgent please <3 */


var stillTrue;
var animate = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60)
    };
var canvas = document.createElement("canvas");
var width = window.innerWidth;
var height = window.innerHeight-5;
canvas.width = width;
canvas.height = height;
canvas.style.display = "none";
canvas.style.position = "fixed";
canvas.style.top = "0px";
var context = canvas.getContext('2d');
var player1;
var computer;
var ball;

var keysDown = {};

var render = function () {
	context.clearRect(0, 0, width, height);
    player1.render();
    computer.render();
    ball.render();
};

var update = function () {
    player1.update();
    computer.update(ball);
    ball.update(player1, computer);
};

var step = function () {
    update();
    render();
	if (stillTrue) animate(step);
};

function Paddle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.x_speed = 0;
    this.y_speed = 0;
}

Paddle.prototype.render = function () {
    context.fillStyle = "#000000";
    context.fillRect(this.x, this.y, this.width, this.height);
};

Paddle.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    this.x_speed = x;
    this.y_speed = y;
    if (this.y < 0) {
        this.y = 0;
        this.y_speed = 0;
    } else if (this.y + this.height > height) {
        this.y = height - this.height;
        this.y_speed = 0;
    }
};

function Computer() {
    this.paddle = new Paddle(20, height/2-50, 20, 100);
	this.score = 0;
	document.getElementById('score1').innerHTML = 0;
}

Computer.prototype.render = function () {
    this.paddle.render();
};

Computer.prototype.update = function (ball) {
	for (var key in keysDown) {
        var value = Number(key);
        if (value == 90) {
            this.paddle.move(0, -8);
        } else if (value == 83) {
            this.paddle.move(0, 8);
        } else {
            this.paddle.move(0, 0);
        }
    }
};

function Player1() {
    this.paddle = new Paddle(width-40, height/2-50, 20, 100);
	this.score = 0;
	document.getElementById('score2').innerHTML = 0;
}

Player1.prototype.render = function () {
    this.paddle.render();
};

Player1.prototype.update = function () {
    for (var key in keysDown) {
        var value = Number(key);
        if (value == 38) {
            this.paddle.move(0, -8);
        } else if (value == 40) {
            this.paddle.move(0, 8);
        } else {
            this.paddle.move(0, 0);
        }
    }
};

function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.x_speed = 7;
    this.y_speed = 0;
}

Ball.prototype.render = function () {
    context.beginPath();
    context.arc(this.x, this.y, 10, 2 * Math.PI, false);
    context.fillStyle = "#000000";
    context.fill();
};

Ball.prototype.update = function (player1, computer) {
	paddle1 = player1.paddle;
	paddle2 = computer.paddle;
    this.x += this.x_speed;
    this.y += this.y_speed;
    var top_x = this.x - 10;
    var top_y = this.y - 10;
    var bottom_x = this.x + 10;
    var bottom_y = this.y + 10;

    if (this.y - 10 < 0) {
        this.y = 10;
        this.y_speed = -this.y_speed;
    } else if (this.y + 10 > height) {
        this.y = height-10;
        this.y_speed = -this.y_speed;
    }

	if (this.x < 0) {
		this.x_speed = 7;
        this.y_speed = 0;
        this.y = height/2;
        this.x = width/2;
		player1.score++;
		document.getElementById('score2').innerHTML = player1.score;
	} else if (this.x > width) {
        this.x_speed = -7;
        this.y_speed = 0;
        this.y = height/2;
        this.x = width/2;
		computer.score++;
		document.getElementById('score1').innerHTML = computer.score;
    }

	if (top_x > width/2) {
        if (top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x && top_y < (paddle1.y + paddle1.height) && bottom_y > paddle1.y) {
            this.x_speed = -(Math.abs(this.x_speed)+1);
            this.y_speed += (paddle1.y_speed / 2);
            this.x += this.x_speed;
        }
    } else {
        if (top_x < (paddle2.x + paddle2.width) && bottom_x > paddle2.x && top_y < (paddle2.y + paddle2.height) && bottom_y > paddle2.y) {
            this.x_speed = (Math.abs(this.x_speed)+1);
            this.y_speed += (paddle2.y_speed / 2);
            this.x += this.x_speed;
        }
    }
};

window.addEventListener("keydown", function (event) {
    keysDown[event.keyCode] = true;

    if (stillTrue && [38,40].indexOf(event.keyCode) >= 0) {
        event.preventDefault();
    }
});

window.addEventListener("keyup", function (event) {
    delete keysDown[event.keyCode];

    if (stillTrue && [38,40].indexOf(event.keyCode) >= 0) {
        event.preventDefault();
    }
});

function thisPong(e) {
	if (e) {
		var key = document.getElementsByClassName('pong');
		for (var i = 0; i < 6; i++) {
			key[i].style.display = "initial";
		}

        width = window.innerWidth;
        height = window.innerHeight-5;
        canvas.width = width;
        canvas.height = height;
        canvas.style.display = "none";
        canvas.style.position = "fixed";
        canvas.style.top = "0px";

		canvas.style.display = "initial";
		player1 = new Player1();
		computer = new Computer();
		ball = new Ball(width/2, height/2);
		stillTrue = true;
        document.body.appendChild(canvas);
		animate(step);
	} else {
		stillTrue = false;
		canvas.style.display = "none";

		var key = document.getElementsByClassName('pong');
		for (var i = 0; i < 6; i++) {
			key[i].style.display = "none";
		}
	}
}
