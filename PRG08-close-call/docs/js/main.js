var CloseCall;
(function (CloseCall) {
    class GameObject extends HTMLElement {
        constructor() {
            super();
            let parent = document.getElementById("container");
            parent.appendChild(this);
        }
        get X() {
            return this.x;
        }
        set X(value) {
            this.x = value;
        }
        get Y() {
            return this.y;
        }
        set Y(value) {
            this.y = value;
        }
        get Width() {
            return this.clientWidth;
        }
        get Height() {
            return this.clientHeight;
        }
        hasCollision(gameObject) {
            return (this.X < gameObject.X + gameObject.Width &&
                this.X + this.Width > gameObject.X &&
                this.Y < gameObject.Y + gameObject.Height &&
                this.Y + this.Height > gameObject.Y);
        }
        move() {
            this.draw();
        }
        draw() {
            this.style.transform = `translate(${this.X}px,${this.Y}px)`;
        }
    }
    CloseCall.GameObject = GameObject;
})(CloseCall || (CloseCall = {}));
var CloseCall;
(function (CloseCall) {
    class Wheel extends CloseCall.GameObject {
        constructor(car, offsetCarX) {
            super();
            this.style.transform = `translate(${offsetCarX}px, 30px)`;
            car.appendChild(this);
        }
        onCollision() {
        }
    }
    CloseCall.Wheel = Wheel;
    window.customElements.define("wheel-component", Wheel);
})(CloseCall || (CloseCall = {}));
var CloseCall;
(function (CloseCall) {
    class Game {
        constructor() {
            this.gameObjects = [];
            this.score = 0;
            this.request = 0;
            this.gameover = false;
            for (let i = 0; i < 6; i++) {
                this.addCarWithRock(i);
            }
            this.gameLoop();
        }
        addCarWithRock(index) {
            this.gameObjects.push(new CloseCall.Car(index, this));
            this.gameObjects.push(new CloseCall.Rock(index));
        }
        gameLoop() {
            for (const gameObject of this.gameObjects) {
                gameObject.move();
            }
            this.checkCollision();
            this.request = requestAnimationFrame(() => this.gameLoop());
        }
        checkCollision() {
            for (const gameObject1 of this.gameObjects) {
                for (let gameObject2 of this.gameObjects) {
                    if (gameObject1.hasCollision(gameObject2)) {
                        gameObject1.onCollision(gameObject2);
                    }
                }
            }
        }
        gameOver() {
            this.gameover = true;
            document.getElementById("score").innerHTML = "Game Over";
            cancelAnimationFrame(this.request);
        }
        addScore(x) {
            if (!this.gameover) {
                this.score += Math.floor(x);
                this.draw();
            }
        }
        draw() {
            document.getElementById("score").innerHTML = "Score : " + this.score;
        }
    }
    CloseCall.Game = Game;
    window.addEventListener("load", () => new Game());
})(CloseCall || (CloseCall = {}));
var CloseCall;
(function (CloseCall) {
    class Rock extends CloseCall.GameObject {
        constructor(yIndex) {
            super();
            this.g = 0;
            this.speed = 0;
            this.rotation = 0;
            this.rotationSpeed = 0;
            this.X = Math.random() * 400 + 400;
            this.Y = (70 * yIndex) + 80;
        }
        set Speed(s) { this.speed = s; }
        move() {
            this.X += this.speed;
            this.Y += this.g;
            this.speed *= 0.98;
            this.rotation += this.rotationSpeed;
            if (this.Y + this.clientHeight > document.getElementById("container").clientHeight) {
                this.speed = 0;
                this.g = 0;
                this.rotationSpeed = 0;
            }
            super.move();
        }
        crash(carSpeed) {
            this.g = 9.81;
            this.speed = carSpeed;
            this.rotationSpeed = 5;
        }
        onCollision(gameObject) {
            if (gameObject instanceof CloseCall.Car) {
                this.crash(gameObject.Speed);
            }
        }
    }
    CloseCall.Rock = Rock;
    window.customElements.define("rock-component", Rock);
})(CloseCall || (CloseCall = {}));
var CloseCall;
(function (CloseCall) {
    class Car extends CloseCall.GameObject {
        constructor(yIndex, game) {
            super();
            this.speed = Math.random() * 2 + 1;
            this.braking = false;
            this.stopped = false;
            this.game = game;
            this.X = 0;
            this.Y = (70 * yIndex) + 80;
            new CloseCall.Wheel(this, 105);
            new CloseCall.Wheel(this, 20);
            document.addEventListener("keydown", (e) => this.handleKeyDown(e));
            this.addEventListener("click", (e) => this.handleMouseClick(e));
        }
        get Speed() { return this.speed; }
        handleMouseClick(e) {
            this.braking = true;
            this.changeColor(80);
        }
        handleKeyDown(e) {
            if (e.key == ' ') {
                this.braking = true;
            }
        }
        move() {
            this.X += this.speed;
            if (this.braking)
                this.speed *= 0.98;
            if (this.speed < 0.5)
                this.speed = 0;
            if (this.speed == 0 && this.braking && !this.stopped) {
                this.changeColor(80);
                this.game.addScore(this.X);
                this.braking = false;
                this.stopped = true;
            }
            super.move();
        }
        onCollision(gameObject) {
            if (gameObject instanceof CloseCall.Rock) {
                this.crash();
                this.game.gameOver();
            }
        }
        crash() {
            this.speed = 0;
            this.braking = false;
            this.changeColor(300);
        }
        changeColor(deg) {
            this.style.filter = `hue-rotate(${deg}deg)`;
        }
    }
    CloseCall.Car = Car;
    window.customElements.define("car-component", Car);
})(CloseCall || (CloseCall = {}));
//# sourceMappingURL=main.js.map