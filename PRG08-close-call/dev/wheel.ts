/// <reference path="car.ts" />
/// <reference path="gameObject.ts" />

namespace CloseCall {
    export class Wheel extends GameObject{
                            
        constructor(car : Car, offsetCarX : number) {
            super()
            
            this.style.transform = `translate(${offsetCarX}px, 30px)`
    
            car.appendChild(this)
        }

        onCollision(){
            //this can be left empty.
        }
    }

    window.customElements.define("wheel-component", Wheel as any)
}