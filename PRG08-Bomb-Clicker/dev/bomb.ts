/// <reference path="gameObject.ts" />
/// <reference path="game.ts" />
namespace bombGame {
    export class Bomb extends GameObject {
            
        constructor(x : number, y : number, speed : number, gameScene : Game) {
            super(x, y, speed, gameScene);
            
            this.addEventListener('click', () => this.onBombClick());
            this.addEventListener('touchstart', () => this.onBombClick());
        }
    
        public update():void {
            this.posy += this.speed;
            
            this.checkOutOfBounds();
            this.draw();
        }

        checkOutOfBounds() {
            //If posy if larger then the innerHeight of the screen teleport it back.
            if (this.posy >= window.innerHeight) {
                this.game.destroyBuilding();
                this.reposition();
            }
        }

        private onBombClick() {
            //add 1 to score in game
            this.game.scorePoint();

            this.reposition();
        }

        reposition() {
            //set Y position back to 0 minus a random number so timing is always different.
            this.posy = 0 - this.speed - Math.floor(Math.random() * 500);
            //change X position so bombs dont fall in the same place.
            this.posx = Math.floor(Math.random() * window.innerWidth);
        }
    }
    window.customElements.define("bomb-component", Bomb as any)
}