class Wash extends Behaviour {
    private duration : number = 2000 //2 seconds
    
    constructor(jibby : Jibby) {
        super(jibby);
        this.jibby.div.style.backgroundImage = "url('images/washing.png')"
        this.jibby.hygiene += 10;
        
        //Jibby wil be set back to Idle after 2 seconds
        this.startTimer(() => this.idle(), this.duration)
    }
    
    public performBehavior(): void {
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
    }
    onWash(): void {
        console.log("You're already washing Jibby");
    }
    onEat(): void {
        this.stopTimer();
        super.onEat();
    }
    onPet(): void {
        this.stopTimer();
        this.angry();
    }
}