class Eat extends Behaviour {
    private duration : number = 1000 //1 second

    constructor(jibby : Jibby) {
        super(jibby);
        this.jibby.div.style.backgroundImage = "url('images/eating.gif')";
        this.jibby.food += 10;

        this.startTimer(() => this.idle(), this.duration);
    }

    public performBehavior(): void {
        this.jibby.hygiene -= 0.01
        this.jibby.happyness -= 0.015
    }
    onWash(): void {
        this.stopTimer();
        super.onWash();
    }
    onEat(): void {
        console.log("Jibby is already eating!");
    }
    onPet(): void {
        this.stopTimer();
        this.angry();
    }
}