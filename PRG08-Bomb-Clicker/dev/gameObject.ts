namespace bombGame {
    export abstract class GameObject extends HTMLElement {
    
        protected posx : number;
        protected posy : number;
        protected speed : number;
        protected game : Game;

        constructor(x : number, y : number, speed : number, gameScene : Game) {
            super();
            let foreground = document.getElementsByTagName("foreground")[0];
            foreground.appendChild(this);

            this.posx = x;
            this.posy = y;
            this.speed = speed;
            this.game = gameScene;
        }

        abstract update() : void;

        protected draw() {
            this.style.transform = `translate(${this.posx}px, ${this.posy}px)`
        }

        abstract checkOutOfBounds() : void;
        abstract reposition() : void;
    }
}