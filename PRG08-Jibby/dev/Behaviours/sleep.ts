class Sleep extends Behaviour {
    constructor(jibby : Jibby){
        super(jibby);
        this.jibby.div.style.backgroundImage = "url('images/sleeping.png')";
    }

    //all stat deduction is halved while Jibby is asleep.
    public performBehavior(): void {
        this.jibby.hygiene -= 0.005;
        this.jibby.food -= 0.01;
        this.jibby.happyness -= 0.0075;

        if (this.jibby.hygiene <= 0 || this.jibby.happyness <= 0 || this.jibby.food <= 0) {
            this.jibby.Behaviour = new Dead(this.jibby);
        }
        else {
            if (this.jibby.hygiene < 10) {
                this.jibby.Behaviour = new Dirty(this.jibby);
            }
            if (this.jibby.food < 10) {
                this.jibby.Behaviour = new Hungry(this.jibby);
            }
            if (this.jibby.happyness < 10) {
                this.jibby.Behaviour = new Sad(this.jibby);
            }
        }
    }

    onWash() {
        this.jibby.Behaviour = new Angry(this.jibby);
    }
    onPet() {
        super.idle();
    }
    onEat() {
        console.log("shush. Jibby is asleep.");
    }
}