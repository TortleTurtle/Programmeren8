/// <reference path="car.ts" />
namespace CloseCall {    
    export class Game {
    
        // Fields
        private cars    : Car[]     = []
        private rocks   : Rock[]    = []
        private score   : number    = 0
        private request : number    = 0
        private gameover: boolean   = false
    
    
        constructor() {
            for(let i = 0 ; i < 6 ; i++) {
                this.addCarWithRock(i)
            }
    
            this.gameLoop()
        }
    
        private addCarWithRock(index : number) {
            this.cars.push(new Car(index, this))
            this.rocks.push(new Rock(index))
        }
    
        private gameLoop(){
            for(let car of this.cars){
                car.move()
            }
            for(let rock of this.rocks) {
                rock.move()
            }
    
            this.checkCollision()
            
            this.request = requestAnimationFrame(() => this.gameLoop())
        }
    
        private checkCollision() {
            for(let car of this.cars) {
                for(let rock of this.rocks) {
                    if(car.hasCollision(rock as GameObject)) {
                        car.onCollision(rock);
                        this.gameOver()
                    }
                }
            }
        }
    
        private gameOver() : void{
            this.gameover = true
            document.getElementById("score").innerHTML = "Game Over"
            cancelAnimationFrame(this.request)
        }
    
        public addScore(x : number){
            if(!this.gameover) {
                this.score += Math.floor(x)
                this.draw()
            }
        }
    
        private draw() {
            document.getElementById("score").innerHTML = "Score : "+this.score
        }
    } 
    
    // load
    window.addEventListener("load", () => new Game() )
}