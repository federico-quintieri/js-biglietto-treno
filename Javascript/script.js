// Input

let TotaleKm = prompt("Inserisci quanti Km devi percorrere");

let EtaPasseggero = prompt("Inserisci quanti anni hai");

TotaleKm = TotaleKm.replace(",", ".");

const TotaleKmNum = isNaN(TotaleKm)
  ? alert("Inserisci km correttamente ")
  : parseFloat(TotaleKm);

const EtaPasseggeroNum = isNaN(EtaPasseggero)
  ? alert("Inserisci età correttamente ")
  : parseInt(EtaPasseggero);

// Variabili globali
const costoPerKm = 0.21;

let prezzoTotale = 0.0;

let percSconto = 0;

let TotaleSconto = 0;

// Se stai fra i 12 ed i 18 anni mettiamo uno sconto del 20%
if (EtaPasseggero < 18 && EtaPasseggero > 12) percSconto = 20;
// Se stai fra i 65 ed i 100 anni mettiamo uno sconto del 40%
else if (EtaPasseggero > 65 && EtaPasseggero < 100) percSconto = 40;

// Otteniamo il totale sconto in euro
TotaleSconto = ((TotaleKm * costoPerKm) / 100) * percSconto;

// Totale costo - Totale sconto
prezzoTotale = TotaleKm * costoPerKm - TotaleSconto;

// Se hai 12 anni o meno torna a casa e l'if si interrompe
if (EtaPasseggero <= 12) {
  alert("Torna a casa bimbo");
}
// Se hai più di 100 anni ti sei perso? e l'if si interrompe
else if (EtaPasseggero >= 100) {
  alert("Si è perso");
} else console.log(`Il prezzo del biglietto è di € ${prezzoTotale.toFixed(2)}`);
