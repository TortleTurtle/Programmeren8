/// <reference path="./ball.ts" />

namespace StrategyPattern {
    export class EarthBall extends Ball{
        constructor(minWidth : number, maxWidth : number, behaviour : BallBehaviour) {
            super(minWidth, maxWidth, behaviour)
        }
    
        public update() : void {
            this.ballBehaviour.performUpdate(this);
        }
    }
    
    window.customElements.define("earthball-component", EarthBall as any)
}