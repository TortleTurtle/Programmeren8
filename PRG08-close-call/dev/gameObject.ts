namespace CloseCall {
    export abstract class GameObject extends HTMLElement {
        private x : number;
        private y : number;
        public width : number;
        public height : number;

        //getters and setters
        public get X(): number {
            return this.x;
        }
        public set X(value: number) {
            this.x = value;
        }

        public get Y(): number {
            return this.y;
        }
        public set Y(value: number) {
            this.y = value;
        }

        public get Width(): number {
            return this.clientWidth;
        }
        public get Height(): number {
            return this.clientHeight;
        }

        constructor(){
            super();

            let parent: HTMLElement = document.getElementById("container")
            parent.appendChild(this)
        }

        public hasCollision(gameObject : GameObject) : boolean {
            return (this.X < gameObject.X + gameObject.Width &&
                this.X + this.Width > gameObject.X &&
                this.Y < gameObject.Y + gameObject.Height &&
                this.Y + this.Height > gameObject.Y);
        }

        public move() : void {
            this.x++; 
        }

        protected draw() : void {
            this.style.transform = `translate(${this.X}px,${this.Y}px)`
        }

        abstract onCollision(gameObject : GameObject) : void;
    }
}