abstract class Behaviour {
    protected jibby : Jibby
    protected timerId : number = 0;

    constructor(jibby : Jibby) {
        this.jibby = jibby;
    }
    
    abstract performBehavior() : void
    
    public onWash(): void {
        this.jibby.Behaviour = new Wash(this.jibby);
    }
    public onEat(): void {
        this.jibby.Behaviour = new Eat(this.jibby);
    }
    public onPet(): void {
        this.jibby.Behaviour = new Pet(this.jibby);
    }
    protected idle(): void {
        this.jibby.Behaviour = new Idle(this.jibby);
    }
    protected sleep(): void {
        this.jibby.Behaviour = new Sleep(this.jibby);
    }
    protected angry(): void {
        this.jibby.Behaviour = new Angry(this.jibby);
    }

    protected startTimer(callBack : () => void ,duration : number) : void {
        //waarom een counter maken als je ook een bestaande functie kan gebruiken ;)
        this.timerId = setTimeout(callBack, duration);
    }
    protected stopTimer() : void {
        clearTimeout(this.timerId);
    }
}