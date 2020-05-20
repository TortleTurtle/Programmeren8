/// <reference path="ball.ts" />
/// <reference path="ballBehaviours/bouncing.ts" />


namespace StrategyPattern {
    export class BasketBall extends Ball{
    
        constructor(minWidth : number, maxWidth : number, behaviour : BallBehaviour) {
            super(minWidth, maxWidth, behaviour)
            
        }
    
        public update() : void {
            //check if ball is on the moon or on earth
            if (this.x < this.maxWidth/2){
                //ball is on earth
                this.ballBehaviour = new Bouncing();
                this.ballBehaviour.performUpdate(this);
            } else {
                //ball is on moon.
                this.ballBehaviour = new Floating();
                this.ballBehaviour.performUpdate(this);
            }
    
            //move the ball
            this.x += this.speedX
            this.y += this.speedY
    
            this.draw()
        }
    }
    
    window.customElements.define("basketball-component", BasketBall as any)
}