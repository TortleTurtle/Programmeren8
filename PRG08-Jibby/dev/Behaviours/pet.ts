class Pet extends Behaviour {
    private duration : number = 2000 //1 second
    
    constructor(jibby : Jibby) {
        super(jibby);
        this.jibby.div.style.backgroundImage = "url('images/happy.png')";
        this.jibby.happyness += 2;

        this.startTimer(this.duration);
    }

    performBehavior(): void {
        this.jibby.hygiene -= 0.01
        this.jibby.food -= 0.02
    }
    public onWash(): void {
        this.stopTimer();
        super.onWash();
    }
    public onEat(): void {
        this.stopTimer();
        super.onEat();
    }
    public onPet(): void {
        this.jibby.happyness += 2;
        //restart the timer.
        this.stopTimer();
        this.startTimer(this.duration);
    }
}