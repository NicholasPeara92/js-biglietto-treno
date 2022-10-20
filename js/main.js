// chiedere all'utente il numero di km che vuole percorrere

const distance = Number(prompt("Inserisci in chilometri la distanza che desideri percorrere"));


// chiedere all'utente la sua età

const age = Number(prompt( "Inserisci la tua età"));

// imporre condizione per cui l'utente non può inserire un numero inferiore o uguale a 0 nei dati

if (distance <= 0 || age <= 0) {
    alert("Attenzione, il numero non può essere inferiore o uguale a 0. Verrà ricaricata la pagina");
    window.location.reload();
}

// imporre condizione per cui l'utente non può inserire dei dati non numerici



// inserire variabile del prezzo base del biglietto

let ticket = distance * 0.21;

// inserire le condizioni in cui viene applicato lo sconto:

if (age < 18) {
    // 1a. se l'utente ha un età inferiore ai 18 anni viene applicato uno sconto del 20%
    ticket = ticket - (ticket * 0.2);

} else if (age >= 65) {
    // 1b. altrimenti se l'utente ha un età maggiore o uguale ai 65 anni viene applicato uno sconto del 40%
    ticket = ticket - (ticket * 0.4);
}

// prezzo totale del biglietto con eventuale sconto applicato

console.log('il prezzo del biglietto è:', ticket.toFixed (2), '€');