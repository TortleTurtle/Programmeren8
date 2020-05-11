# Bomb Clicker

In [Bomb Clicker](https://hr-cmgt.github.io/PRG08-Week1-oefening1-completed/) klik je op de bommen om te voorkomen dat de stad vernietigd wordt. Klik op de vrachtwagen om de stad weer op te bouwen.

Game basics met DOM elementen en de Game Loop.

## OPDRACHT

- Compileer en run de game
- Maak een gameloop met requestAnimationFrame
- Laat de auto naar rechts bewegen met de gameloop
- Laat het bommetje naar beneden bewegen met de gameloop

## OPDRACHT

- Pas inheritance toe op de car en de bomb. Dit kun je doen met een abstracte class 'GameObject'. Op deze manier kun je afdwingen dat de child class bijvoorbeeld de functie 'update' moet hebben.

## OPDRACHT

- Als de auto rechts uit beeld gaat, verschijnt deze weer links
- Als de bom onder uit beeld gaat, verschijnt deze weer boven
- Maak de start x positie van de bom random!
- Maak de start x positie van de auto ook random, zodat het even duurt voordat hij weer in beeld verschijnt.

**Code voorbeeld**
```
let w = window.innerWidth   
let h = window.innerHeight 
```

## OPDRACHT

- Start de game met 4 (of meer) bommetjes. plaats deze in een array in game.ts
- Geef de bommetjes een random start x positie en een random snelheid
- Maak de bommetjes aanklikbaar. De code hiervoor zet je in bomb.ts
- Als je op een bommetje klikt dan zet je de y positie op -500 (of een random negatieve waarde), hoe kleiner het getal, hoe langer het duurt voor de bom weer in beeld verschijnt.

## OPDRACHT

- In game.ts wordt een score bijgehouden en het aantal kapotte gebouwen
- Bedenk hoe je vanuit bomb de functies in game kan aanroepen
- Als een bom wordt aangeklikt, tel dan 1 op bij de score. Update het scoreveld.

## OPDRACHT

- Als een bom onder uit beeld valt, tel dan 1 op bij het aantal kapotte gebouwen
- Als er vier kapotte gebouwen zijn, stop dan de gameloop
- Als je de auto aanklikt resetten je kapotte gebouwen weer. De auto moet niet te vaak in beeld zijn.

**Code voorbeeld**

Door de achtergrondafbeelding van de scorebalk naar links te verschuiven, kan je laten zien hoeveel gebouwen er kapot zijn
```
this.statusbar.style.backgroundPositionX = "-72px"      // één kapot gebouw
```

## OPDRACHT

- Plaats de docs map van de game online, bv. op github pages (Project op Github > Settings > Scroll naar beneden 'Github Pages' > activate. Bij source select 'master branche /docs folder')
- Voeg "touchstart" event listeners toe voor touchscreens
- Test de game op je telefoon

n.b. Als student heb je de mogelijkheid om een [Student Developer Pack](https://education.github.com/pack) aan te vragen. Hiermee krijg je toegang te heel wat tools en een gratis Github Pro account. 

