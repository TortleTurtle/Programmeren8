# PRG08 Week3 oefening1


[Demo Jibby](https://hr-cmgt.github.io/PRG08-Jibby-completed/)

![Jibby](jibbyresult.png)

## Jibby

Jibby is een [tamagotchi](https://en.wikipedia.org/wiki/Tamagotchi) die je in leven moet houden. Dit doe je door hem aandacht en eten te geven, en schoon te houden. Wanneer je Jibby niet goed verzorgt zal hij dood gaan door een gebrek aan eten, aandacht of hygiene.

Gebruik het **strategy pattern** om het gedrag van Jibby te programmeren. Elk gedrag kan de eigenschappen van Jibby veranderen op een andere manier. 

## Game play

Gedrag
- **Douchen**: de *hygiene* en *happyness* gaan omhoog (hygiene + 10, happyness + 5)
- **Eten**: Jibby krijgt minder *honger* (hunger + 10)
- **Aaien**: de *happyness* gaat omhoog (elke klik happyness + 2)

- hunger lager dan 10 Jibby krijgt gedrag `Hungry`
- hygiene lager dan 10 Jibby krijgt gedrag `Dirty`
- happyness lager dan 10 Jibby krijgt gedrag `Sad`

## De interface

- In Jibby zijn eventListeners gekoppeld aan de rode knoppen en aan het plaatje van Jibby zelf. Klik je hierop dan worden de `onEat`, `onWash` en `onPet` functies in Jibby aangeroepen.
- Op dit moment verandert alleen het plaatje. Later zal je dezelfde `onEat`, `onWash` en `onPet` functies in het gedrag van Jibby moeten aanroepen.
- Als jibby dood is reageert hij niet meer...

## Opdracht Bouw de basis van Jibby

- Jibby checkt in zijn update functie of zijn statistieken te laag zijn geworden. Als een statistiek onder 0 komt wordt het gedrag `Dead`
- Bouw Jibby met een `Idle` gedrag met daarin drie stats (hunger, hygiene, happyness). In dit gedrag wordt gecontroleerd of een waarde onder 10 is gekomen. 
- Jibby roept vanuit zijn update functie de `performBehavior` van zijn gedrag aan.

Gedrag
- `Idle`: hierin gaan alle stats geleidelijk omlaag.
- `Dead`: hierin gebeurt niets.

## Opdracht Bouw Wash Behavior

Waneer je op de doucheknop klikt zal in het `Wash` Behavior bepaald worden dat hygiene er 10 eenheden bij krijgt

## Opdracht Bouw een timer

In de update functie van het gedrag hou je een **counter** bij. Gebruik de counter om in het gedrag (Douchen, Aaien en Eten) na een tijdje (bijv 2 seconden) het gedrag van Jibby automatisch terug naar de Idle status te veranderen.

## Opdracht Bouw Pet en Eat Behavior

Pas de Wash uitwerking ook toe op `Pet` en `Eat`.
Klik op Jibby, Jibby gaat naar Pet Behavior. Hygiene wordt bij elke klik 2 eenheden opgehoogd
KLik op Eat, Jibby gaat naar Eat Behavior. Eat duurt 1 seconde en hunger wordt 10 eenheden opgehoogd. 

## Opdracht abstracte class aanmaken. 

Je merkt nu dat de timer in meerdere class voor komt. Om dit te voorkomen maak je van de interface `Behavior` een abstracte class. Hierin plaats je de timer (in `performBehavior`) en een functie wat er moet gebeuren als de timer klaar is `onTimerFinished`. 

Verder behoudt deze class de functies `onWash`, `onPet` en `onEat`. Deze worden *abstract*.

## Complex gedrag

Sleeping
- Als jibby een tijdje Idle is valt hij in slaap. Als hij slaapt gaan zijn stats niet zo snel omlaag.
- Als jibby slaapt kan je hem wakker maken door hem aan te klikken

Angry
- Jibby wordt boos als je hem aait terwijl hij eet of als hij onder de douche staat
- Jibby wordt boos als je hem onder de douche zet terwijl hij slaapt

Kan je nog meer gedrag bedenken? Wat gebeurt er als je hem aanraakt als hij dood is?


