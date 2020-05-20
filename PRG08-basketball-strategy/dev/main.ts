namespace StrategyPattern {
    class Main {
    
        private balls : Ball[] = []
    
        constructor() {
            
            this.balls.push(new EarthBall(0, window.innerWidth/2, new Bouncing))
            this.balls.push(new MoonBall(window.innerWidth/2, window.innerWidth, new Floating))
            this.balls.push(new BasketBall(0, window.innerWidth, new Bouncing()));
            this.gameLoop()
        }
    
        gameLoop() {
            for (const ball of this.balls) {
                ball.update()
            }
    
            requestAnimationFrame(() => this.gameLoop())
        }
    }
    
    window.addEventListener("load", () => new Main())
}