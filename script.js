/* Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

/*
 ci serve un contatore per ciclo che scorra i numeri da 1 a 100
 durante l'esecuzione del ciclo controlliamo se la divisione per 3 del numero corrente ci dà resto 0, in tal caso è divisibile 
 quindi stiampiamo "Fizz"
 eseguiamo  un controllo simile che verifichi la divisione per 5 e in quel caso stampiamo Buzz

 dal momento che vogliamo che se il numero è divisibile per entrambi stampi "FizzBuzz", creerei una variabile globale per il messaggio
 la svuoterei all'inizio del ciclo, poi se è divisibile per 3 ci metterei dentro Fizz, se è divisibile per 5 ci inserirei Buzz, in tal modo
 se è divisibile per entrambi la variabile conterrà entrambi i valori, poi prima di chiudere il ciclo la stamperei se non è nulla.
*/


let message;
for (let i=1; i<=100; i++) {
    message = null;
    if (i%3==0) {
        message = "Fizz";
    }
    if (i%5==0) {
        if (message!=null) {
        message = message+"Buzz"
        }
        else {
            message="Buzz"
        }
    }
    if (message!=null) console.log(i , message);
}
