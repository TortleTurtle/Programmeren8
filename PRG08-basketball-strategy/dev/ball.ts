/// <reference path="./ballBehaviours/ballBehaviour.ts" />
namespace StrategyPattern {
    export abstract class Ball extends HTMLElement{
    
        public readonly gravity    : number = 0.1
        public readonly friction   : number = 0.9
    
        protected x           : number = 0
        protected y           : number = 0
        protected speedX      : number = 5
        protected speedY      : number = -3
        protected minWidth    : number = 0
        protected maxWidth    : number = 0
        protected maxHeight   : number = 0
        protected ballBehaviour : BallBehaviour
    
        
        public get X() : number     { return this.x }
        public set X(posx : number) { this.x = posx}
        public get Y() : number     { return this.y }
        public set Y(posy : number) { this.y = posy }
        
    
        public get SpeedX() : number { return this.speedX }
        public set SpeedX(s : number) { this.speedX = s }
        public get SpeedY() : number { return this.speedY }
        public set SpeedY(s : number) { this.speedY = s }
    
        public get MinWidth() : number { return this.minWidth }
        public get MaxWidth() : number { return this.maxWidth }
        public get MaxHeight() : number { return this.maxHeight }
    
        public set BallBehaviour(b : BallBehaviour) { this.ballBehaviour = b }
        
        constructor(minWidth : number, maxWidth : number, behaviour : BallBehaviour) {
            super()
    
            let content = document.getElementsByTagName("content")[0]
            content.appendChild(this)
    
            maxWidth -= this.clientWidth
            this.x = (Math.random() * (maxWidth - minWidth)) + minWidth
            this.y = 100
    
            this.minWidth   = minWidth
            this.maxWidth   = maxWidth
            this.maxHeight  = window.innerHeight - this.clientHeight

            this.ballBehaviour = behaviour;
        }
    
        abstract update() : void
    
        public draw() {
            this.style.transform = "translate("+this.x+"px, "+this.y+"px)"
        }
    }
}