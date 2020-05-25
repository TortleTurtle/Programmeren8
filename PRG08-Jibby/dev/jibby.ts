class Jibby {

    public hygiene:number
    public food:number
    public happyness:number

    public div:HTMLElement
    public x:number
    public y:number

    private behaviour : Behaviour

    public get Behaviour() : Behaviour { return this.behaviour }
    public set Behaviour(b : Behaviour) { this.behaviour = b }
            
    constructor(parent:HTMLElement) {
        this.div = document.createElement("jibby")
        parent.appendChild(this.div)

        // start instellingen
        this.x = 0
        this.y = 220
        this.hygiene = this.food = this.happyness = 11

        this.behaviour = new Idle(this);

        // click listeners
        this.div.addEventListener("click", () => this.behaviour.onPet())
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", () => this.behaviour.onEat())
        document.getElementsByTagName("washbutton")[0].addEventListener("click", () => this.behaviour.onWash())
        
    }

    public update():void {
    // hier het gedrag updaten
        console.log(this.behaviour);
        this.behaviour.performBehavior();
    }
}