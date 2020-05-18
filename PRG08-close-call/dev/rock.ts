/// <reference path="gameObject.ts" />

namespace CloseCall {
    export class Rock extends GameObject{
        // Fields 
        private g               : number = 0 // gravity
        private speed           : number = 0
        private rotation        : number = 0
        private rotationSpeed   : number = 0
    
        // Properties
        public set Speed(s  : number)   { this.speed = s }     
    
        constructor(yIndex) {
            super()
            this.X = Math.random() * 400 + 400
            this.Y = (70 * yIndex) + 80
        }
    
        public move():void {
            // speed optellen zo lang we niet de bodem raken
            // speed wordt hoger dan 0 zodra de auto de rots raakt
            this.X += this.speed
            this.Y += this.g
            this.speed *= 0.98
            this.rotation += this.rotationSpeed
    
            if (this.Y + this.clientHeight > document.getElementById("container").clientHeight){
                this.speed = 0
                this.g = 0
                this.rotationSpeed = 0
            }
    
            //teken de div op de juiste positie
            this.draw()
        }
    
        public crash(carSpeed : number) {
            this.g = 9.81
            this.speed = carSpeed
            this.rotationSpeed = 5
        }

        onCollision() {
            //no idea why this is here.
        }
    }
    
    window.customElements.define("rock-component", Rock as any)
}