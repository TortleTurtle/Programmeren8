namespace bombGame {
    export class Game {
        
        private score: number = 0
        private destroyed: number = 0
        private textfield: HTMLElement
        private statusbar: HTMLElement
        private bombs : Array<Bomb>
        private car: Car
        private animationFrame : number
        
        constructor() {
            this.textfield  = document.getElementsByTagName("textfield")[0] as HTMLElement
            this.statusbar  = document.getElementsByTagName("bar")[0] as HTMLElement
            
            this.bombs = [];
            this.spawnBombs(6);
            this.car        = new Car(0, window.innerHeight - 150, 5, this);
            
            // call method gameLoop
            this.gameLoop();
        }
        
        private gameLoop():void{
            console.log("updating the game");
            
            //update all bombs
            this.bombs.forEach(bomb => {
                bomb.update();
            });
            //update the car
            this.car.update();
            // add request animation frame
            this.animationFrame = requestAnimationFrame(() => this.gameLoop());
            //check if too many buildings have been destroyed
            this.checkBuildings();
        }
    
        public destroyBuilding(){
            this.destroyed ++
            this.statusbar.style.backgroundPositionX = -72 * this.destroyed + "px";
        }

        public resetBuildings(){
            this.destroyed = 0;
            this.statusbar.style.backgroundPositionX = "0px";
        }

        public checkBuildings() {
            if ( this.destroyed >= 4) {
                window.cancelAnimationFrame(this.animationFrame);
            }
        }
           
        public scorePoint() {
            this.score ++
            this.textfield.innerHTML = "Score: " + this.score
        }

        public spawnBombs(maxBombs : number) {
            let bombCount = Math.floor(Math.random() * maxBombs);
            if (bombCount < 4) {
                bombCount = 4;
            }

            for (let i = 0; i < bombCount; i++) {
                let randomX = Math.floor(Math.random() * window.innerWidth);
                //1 + random number to ensure a bomb is always moving.
                let randomSpeed = 1 + Math.floor(Math.random() * 9);
                this.bombs.push(new Bomb(randomX, 0, randomSpeed, this));
            }
        }
    
    } 
    
    window.addEventListener("load", () => new Game())
}