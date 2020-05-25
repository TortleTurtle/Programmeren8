class Dirty extends Behaviour {
       
    constructor(jibby : Jibby) {
        super(jibby);
        this.jibby.div.style.backgroundImage = "url('images/dirty.png')"
    }

    performBehavior(): void {
        this.jibby.hygiene -= 0.01
        this.jibby.food -= 0.02
        this.jibby.happyness -= 0.015

        if (this.jibby.hygiene <= 0 || this.jibby.happyness <= 0 || this.jibby.food <= 0) {
            this.jibby.Behaviour = new Dead(this.jibby);
        }
    }
}