class Dead extends Behaviour {
    
    constructor(jibby : Jibby){
        super(jibby);
        this.jibby.div.style.backgroundImage = "url('images/dead.png')"
    }

    public performBehavior(): void {
        console.log("Jibby is dead!");
    }    
    public onWash(): void {
        console.log("Jibby can't do this because Jibby is dead!");
    }
    public onEat(): void {
        console.log("Jibby can't do this because Jibby is dead!");
    }
    public onPet(): void {
        this.jibby.div.style.backgroundImage = "url('images/zombie.png')"
    }
}