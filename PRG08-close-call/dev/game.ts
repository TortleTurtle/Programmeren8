/// <reference path="car.ts" />
namespace CloseCall {    
    export class Game {
    
        // Fields
        // cars & rocks collection can be replaced with a gameObject collection.    
        private gameObjects : GameObject[] = []
        private score   : number    = 0
        private request : number    = 0
        private gameover: boolean   = false
    
    
        constructor() {
            for(let i = 0 ; i < 6 ; i++) {
                this.addCarWithRock(i)
            }
    
            this.gameLoop()
        }
        
        //replace cars and rocks array with gameObject array
        private addCarWithRock(index : number) {
            this.gameObjects.push(new Car(index, this))
            this.gameObjects.push(new Rock(index))
        }
    
        private gameLoop(){
            for(const gameObject of this.gameObjects){
                gameObject.move();
            }
    
            this.checkCollision()
            
            this.request = requestAnimationFrame(() => this.gameLoop())
        }
        
        //this needs to loop through the gameObject collection.
        private checkCollision() {
            for(const gameObject1 of this.gameObjects) {
                for(let gameObject2 of this.gameObjects) {
                    if(gameObject1.hasCollision(gameObject2)) {
                        gameObject1.onCollision(gameObject2);
                    }
                }
            }
        }
    
        public gameOver() : void{
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