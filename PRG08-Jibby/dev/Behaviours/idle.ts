class Idle extends Behaviour {
    private duration : number = 1000;
    
    constructor(jibby : Jibby) {
        super(jibby);
        this.jibby.div.style.backgroundImage = "url('images/idle.png')";
        this.startTimer(this.duration);
    }

    public performBehavior(): void {
        this.jibby.hygiene -= 0.01
        this.jibby.food -= 0.02
        this.jibby.happyness -= 0.015

        if (this.jibby.hygiene <= 0 || this.jibby.happyness <= 0 || this.jibby.food <= 0) {
            this.stopTimer();
            this.jibby.Behaviour = new Dead(this.jibby);
        }
        else {
            if (this.jibby.hygiene < 10) {
                this.stopTimer();
                this.jibby.Behaviour = new Dirty(this.jibby);
            }
            if (this.jibby.food < 10) {
                this.stopTimer();
                this.jibby.Behaviour = new Hungry(this.jibby);
            }
            if (this.jibby.happyness < 10) {
                this.stopTimer();
                this.jibby.Behaviour = new Sad(this.jibby);
            }
        }
    }

    protected startTimer(duration : number) {
        this.timerId = setTimeout(() => this.sleep(), duration);
    }

    onWash() {
        this.stopTimer();
        super.onWash();
    }
    onEat() {
        this.stopTimer();
        super.onEat();
    }
    onPet() {
        this.stopTimer();
        super.onPet();
    }
}