"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Jibby = (function () {
    function Jibby(parent) {
        var _this = this;
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);
        this.x = 0;
        this.y = 220;
        this.hygiene = this.food = this.happyness = 50;
        this.behaviour = new Idle(this);
        this.div.addEventListener("click", function () { return _this.behaviour.onPet(); });
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", function () { return _this.behaviour.onEat(); });
        document.getElementsByTagName("washbutton")[0].addEventListener("click", function () { return _this.behaviour.onWash(); });
    }
    Object.defineProperty(Jibby.prototype, "Behaviour", {
        get: function () { return this.behaviour; },
        set: function (b) { this.behaviour = b; },
        enumerable: true,
        configurable: true
    });
    Jibby.prototype.update = function () {
        console.log(this.behaviour);
        this.behaviour.performBehavior();
    };
    return Jibby;
}());
var Game = (function () {
    function Game() {
        var container = document.getElementById("container");
        this.jibby = new Jibby(container);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.jibby.update();
        this.updateUI();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.updateUI = function () {
        document.getElementsByTagName("food")[0].innerHTML = Math.round(this.jibby.food).toString();
        document.getElementsByTagName("happyness")[0].innerHTML = Math.round(this.jibby.happyness).toString();
        document.getElementsByTagName("hygiene")[0].innerHTML = Math.round(this.jibby.hygiene).toString();
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Behaviour = (function () {
    function Behaviour(jibby) {
        this.timerId = 0;
        this.jibby = jibby;
    }
    Behaviour.prototype.onWash = function () {
        this.jibby.Behaviour = new Wash(this.jibby);
    };
    Behaviour.prototype.onEat = function () {
        this.jibby.Behaviour = new Eat(this.jibby);
    };
    Behaviour.prototype.onPet = function () {
        this.jibby.Behaviour = new Pet(this.jibby);
    };
    Behaviour.prototype.idle = function () {
        this.jibby.Behaviour = new Idle(this.jibby);
    };
    Behaviour.prototype.sleep = function () {
        this.jibby.Behaviour = new Sleep(this.jibby);
    };
    Behaviour.prototype.angry = function () {
        this.jibby.Behaviour = new Angry(this.jibby);
    };
    Behaviour.prototype.startTimer = function (callBack, duration) {
        this.timerId = setTimeout(callBack, duration);
    };
    Behaviour.prototype.stopTimer = function () {
        clearTimeout(this.timerId);
    };
    return Behaviour;
}());
var Angry = (function (_super) {
    __extends(Angry, _super);
    function Angry(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.jibby.div.style.backgroundImage = "url('images/angry.png')";
        _this.jibby.happyness -= 5;
        return _this;
    }
    Angry.prototype.performBehavior = function () {
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
    };
    return Angry;
}(Behaviour));
var Dead = (function (_super) {
    __extends(Dead, _super);
    function Dead(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.jibby.div.style.backgroundImage = "url('images/dead.png')";
        return _this;
    }
    Dead.prototype.performBehavior = function () {
        console.log("Jibby is dead!");
    };
    Dead.prototype.onWash = function () {
        console.log("Jibby can't do this because Jibby is dead!");
    };
    Dead.prototype.onEat = function () {
        console.log("Jibby can't do this because Jibby is dead!");
    };
    Dead.prototype.onPet = function () {
        this.jibby.div.style.backgroundImage = "url('images/zombie.png')";
    };
    return Dead;
}(Behaviour));
var Dirty = (function (_super) {
    __extends(Dirty, _super);
    function Dirty(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.jibby.div.style.backgroundImage = "url('images/dirty.png')";
        return _this;
    }
    Dirty.prototype.performBehavior = function () {
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
        if (this.jibby.hygiene <= 0 || this.jibby.happyness <= 0 || this.jibby.food <= 0) {
            this.jibby.Behaviour = new Dead(this.jibby);
        }
    };
    return Dirty;
}(Behaviour));
var Eat = (function (_super) {
    __extends(Eat, _super);
    function Eat(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.duration = 1000;
        _this.jibby.div.style.backgroundImage = "url('images/eating.gif')";
        _this.jibby.food += 10;
        _this.startTimer(function () { return _this.idle(); }, _this.duration);
        return _this;
    }
    Eat.prototype.performBehavior = function () {
        this.jibby.hygiene -= 0.01;
        this.jibby.happyness -= 0.015;
    };
    Eat.prototype.onWash = function () {
        this.stopTimer();
        _super.prototype.onWash.call(this);
    };
    Eat.prototype.onEat = function () {
        console.log("Jibby is already eating!");
    };
    Eat.prototype.onPet = function () {
        this.stopTimer();
        this.angry();
    };
    return Eat;
}(Behaviour));
var Hungry = (function (_super) {
    __extends(Hungry, _super);
    function Hungry(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.jibby.div.style.backgroundImage = "url('images/hungry.png')";
        return _this;
    }
    Hungry.prototype.performBehavior = function () {
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
        if (this.jibby.hygiene <= 0 || this.jibby.happyness <= 0 || this.jibby.food <= 0) {
            this.jibby.Behaviour = new Dead(this.jibby);
        }
    };
    return Hungry;
}(Behaviour));
var Idle = (function (_super) {
    __extends(Idle, _super);
    function Idle(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.duration = 5000;
        _this.jibby.div.style.backgroundImage = "url('images/idle.png')";
        _this.startTimer(function () { return _this.sleep(); }, _this.duration);
        return _this;
    }
    Idle.prototype.performBehavior = function () {
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
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
    };
    Idle.prototype.onWash = function () {
        this.stopTimer();
        _super.prototype.onWash.call(this);
    };
    Idle.prototype.onEat = function () {
        this.stopTimer();
        _super.prototype.onEat.call(this);
    };
    Idle.prototype.onPet = function () {
        this.stopTimer();
        _super.prototype.onPet.call(this);
    };
    return Idle;
}(Behaviour));
var Pet = (function (_super) {
    __extends(Pet, _super);
    function Pet(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.duration = 1000;
        _this.jibby.div.style.backgroundImage = "url('images/happy.png')";
        _this.jibby.happyness += 2;
        _this.startTimer(function () { return _this.idle(); }, _this.duration);
        return _this;
    }
    Pet.prototype.performBehavior = function () {
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
    };
    Pet.prototype.onWash = function () {
        this.stopTimer();
        _super.prototype.onWash.call(this);
    };
    Pet.prototype.onEat = function () {
        this.stopTimer();
        _super.prototype.onEat.call(this);
    };
    Pet.prototype.onPet = function () {
        var _this = this;
        this.jibby.happyness += 2;
        this.stopTimer();
        this.startTimer(function () { return _this.idle(); }, this.duration);
    };
    return Pet;
}(Behaviour));
var Sad = (function (_super) {
    __extends(Sad, _super);
    function Sad(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.jibby.div.style.backgroundImage = "url('images/sad.png')";
        return _this;
    }
    Sad.prototype.performBehavior = function () {
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
        if (this.jibby.hygiene <= 0 || this.jibby.happyness <= 0 || this.jibby.food <= 0) {
            this.jibby.Behaviour = new Dead(this.jibby);
        }
    };
    return Sad;
}(Behaviour));
var Sleep = (function (_super) {
    __extends(Sleep, _super);
    function Sleep(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.jibby.div.style.backgroundImage = "url('images/sleeping.png')";
        return _this;
    }
    Sleep.prototype.performBehavior = function () {
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
    };
    Sleep.prototype.onWash = function () {
        this.jibby.Behaviour = new Angry(this.jibby);
    };
    Sleep.prototype.onPet = function () {
        _super.prototype.idle.call(this);
    };
    Sleep.prototype.onEat = function () {
        console.log("shush. Jibby is asleep.");
    };
    return Sleep;
}(Behaviour));
var Wash = (function (_super) {
    __extends(Wash, _super);
    function Wash(jibby) {
        var _this = _super.call(this, jibby) || this;
        _this.duration = 2000;
        _this.jibby.div.style.backgroundImage = "url('images/washing.png')";
        _this.jibby.hygiene += 10;
        _this.startTimer(function () { return _this.idle(); }, _this.duration);
        return _this;
    }
    Wash.prototype.performBehavior = function () {
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
    };
    Wash.prototype.onWash = function () {
        console.log("You're already washing Jibby");
    };
    Wash.prototype.onEat = function () {
        this.stopTimer();
        _super.prototype.onEat.call(this);
    };
    Wash.prototype.onPet = function () {
        this.stopTimer();
        this.angry();
    };
    return Wash;
}(Behaviour));
//# sourceMappingURL=main.js.map