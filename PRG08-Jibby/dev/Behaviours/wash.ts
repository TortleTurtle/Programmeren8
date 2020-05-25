class Wash extends Behaviour {
    private duration : number = 2000 //2 seconds
    
    constructor(jibby : Jibby) {
        super(jibby);
        this.jibby.div.style.backgroundImage = "url('images/washing.png')"
        this.jibby.hygiene += 10;
        
        //Jibby wil be set back to Idle after 2 seconds
        this.startTimer(this.duration)
    }
    
    performBehavior(): void {
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
    }
    public onWash(): void {
        console.log("You're already washing Jibby");
    }
    public onEat(): void {
        this.stopTimer();
        super.onEat();
    }
    public onPet(): void {
        this.stopTimer();
        this.angry();
    }
}