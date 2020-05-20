/// <reference path="./ball.ts" />

namespace StrategyPattern {
    export class MoonBall extends Ball {
        constructor(minWidth : number, maxWidth : number, behaviour : BallBehaviour) {
            super(minWidth, maxWidth, behaviour)
        }
    
        public update() : void {
            this.ballBehaviour.performUpdate(this);
        }
    }
    
    window.customElements.define("moonball-component", MoonBall as any)
}