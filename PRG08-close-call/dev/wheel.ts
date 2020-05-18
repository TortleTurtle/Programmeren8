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
            //no idea why this is here.
        }
    }

    window.customElements.define("wheel-component", Wheel as any)
}