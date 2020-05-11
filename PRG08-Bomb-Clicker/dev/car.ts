/// <reference path="gameObject.ts" />
namespace bombGame {
    export class Car extends GameObject{
        
        constructor(x: number, y: number, speed : number, gameScene : Game) {
            super(x, y, speed, gameScene);
         
            this.addEventListener("click", () => this.onCarClick());
            this.addEventListener("touchstart", () => this.onCarClick());
        }
    
        public update():void {
            this.posx += this.speed;
            
            this.checkOutOfBounds();
            this.draw();
        }
        
        checkOutOfBounds() {
            //if the Car's X position is more then the screenwidth in pixels then...
            if (this.posx > window.innerWidth) {
                this.reposition();
            }
        }

        private onCarClick() {
            //reset destroyed building counter
            this.game.resetBuildings();

            this.reposition();
        }

        reposition() {
            //set X position back to 0 minus a random number so timing is always different.
            this.posx = 0 - Math.floor(Math.random() * 200);
        }
    }
    window.customElements.define("car-component", Car as any)
}