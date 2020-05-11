"use strict";
var bombGame;
(function (bombGame) {
    class GameObject extends HTMLElement {
        constructor(x, y, speed, gameScene) {
            super();
            let foreground = document.getElementsByTagName("foreground")[0];
            foreground.appendChild(this);
            this.posx = x;
            this.posy = y;
            this.speed = speed;
            this.game = gameScene;
        }
        draw() {
            this.style.transform = `translate(${this.posx}px, ${this.posy}px)`;
        }
    }
    bombGame.GameObject = GameObject;
})(bombGame || (bombGame = {}));
var bombGame;
(function (bombGame) {
    class Game {
        constructor() {
            this.score = 0;
            this.destroyed = 0;
            this.textfield = document.getElementsByTagName("textfield")[0];
            this.statusbar = document.getElementsByTagName("bar")[0];
            this.bombs = [];
            this.spawnBombs(6);
            this.car = new bombGame.Car(0, window.innerHeight - 150, 5, this);
            this.gameLoop();
        }
        gameLoop() {
            console.log("updating the game");
            this.bombs.forEach(bomb => {
                bomb.update();
            });
            this.car.update();
            this.animationFrame = requestAnimationFrame(() => this.gameLoop());
            this.checkBuildings();
        }
        destroyBuilding() {
            this.destroyed++;
            console.log("buildings destroyed " + this.destroyed);
            this.statusbar.style.backgroundPositionX = -72 * this.destroyed + "px";
        }
        resetBuildings() {
            this.destroyed = 0;
            console.log("buildings destroyed " + this.destroyed);
            this.statusbar.style.backgroundPositionX = "0px";
        }
        checkBuildings() {
            if (this.destroyed >= 4) {
                window.cancelAnimationFrame(this.animationFrame);
            }
        }
        scorePoint() {
            this.score++;
            this.textfield.innerHTML = "Score: " + this.score;
        }
        spawnBombs(maxBombs) {
            let bombCount = Math.floor(Math.random() * maxBombs);
            if (bombCount < 4) {
                bombCount = 4;
            }
            for (let i = 0; i < bombCount; i++) {
                let randomX = Math.floor(Math.random() * window.innerWidth);
                let randomSpeed = 1 + Math.floor(Math.random() * 9);
                this.bombs.push(new bombGame.Bomb(randomX, 0, randomSpeed, this));
            }
        }
    }
    bombGame.Game = Game;
    window.addEventListener("load", () => new Game());
})(bombGame || (bombGame = {}));
var bombGame;
(function (bombGame) {
    class Bomb extends bombGame.GameObject {
        constructor(x, y, speed, gameScene) {
            super(x, y, speed, gameScene);
            this.addEventListener('click', () => this.onBombClick());
            this.addEventListener('touchstart', () => this.onBombClick());
        }
        update() {
            this.posy += this.speed;
            this.checkOutOfBounds();
            this.draw();
        }
        checkOutOfBounds() {
            if (this.posy >= window.innerHeight) {
                this.game.destroyBuilding();
                this.reposition();
            }
        }
        onBombClick() {
            this.game.scorePoint();
            this.reposition();
        }
        reposition() {
            this.posy = 0 - this.speed - Math.floor(Math.random() * 500);
            this.posx = Math.floor(Math.random() * window.innerWidth);
        }
    }
    bombGame.Bomb = Bomb;
    window.customElements.define("bomb-component", Bomb);
})(bombGame || (bombGame = {}));
var bombGame;
(function (bombGame) {
    class Car extends bombGame.GameObject {
        constructor(x, y, speed, gameScene) {
            super(x, y, speed, gameScene);
            this.addEventListener("click", () => this.onCarClick());
            this.addEventListener("touchstart", () => this.onCarClick());
        }
        update() {
            this.posx += this.speed;
            this.checkOutOfBounds();
            this.draw();
        }
        checkOutOfBounds() {
            if (this.posx > window.innerWidth) {
                this.reposition();
            }
        }
        onCarClick() {
            this.game.resetBuildings();
            this.reposition();
        }
        reposition() {
            this.posx = 0 - Math.floor(Math.random() * 200);
        }
    }
    bombGame.Car = Car;
    window.customElements.define("car-component", Car);
})(bombGame || (bombGame = {}));
//# sourceMappingURL=main.js.map