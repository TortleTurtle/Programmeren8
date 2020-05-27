class Pet extends Behaviour {
    private duration : number = 1000 //1 second
    
    constructor(jibby : Jibby) {
        super(jibby);
        this.jibby.div.style.backgroundImage = "url('images/happy.png')";
        this.jibby.happyness += 2;

        this.startTimer(() => this.idle(), this.duration);
    }

    public performBehavior(): void {
        this.jibby.hygiene -= 0.01
        this.jibby.food -= 0.02
    }
    onWash(): void {
        this.stopTimer();
        super.onWash();
    }
    onEat(): void {
        this.stopTimer();
        super.onEat();
    }
    onPet(): void {
        this.jibby.happyness += 2;
        //restart the timer.
        this.stopTimer();
        this.startTimer(() => this.idle(), this.duration);
    }
}