/// <reference path="behavior.ts"/>

class Angry extends Behaviour {
    constructor(jibby : Jibby){
        super(jibby);
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";
        this.jibby.happyness -= 5;
    }

    performBehavior() {
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.03;

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
}