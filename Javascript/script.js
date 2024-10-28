// Input

let TotaleKm = prompt("Inserisci quanti Km devi percorrere");

let EtaPasseggero = prompt("Inserisci quanti anni hai");

// Variabili globali
const costoPerKm = 0.21;

let prezzoTotale = 0.0;

let percSconto = 0;

let TotaleSconto = 0;

// Controlli
if (isNaN(TotaleKm)) alert("Inserisci i km correttamente");

if (isNaN(EtaPasseggero)) alert("Inserisci la tua età correttamente");

// Se sia il TotaleKm che l'EtaPasseggero sono valori numerici validi
if (!isNaN(TotaleKm) && !isNaN(EtaPasseggero)) {
  // Convertiamo in numero i km
  TotaleKm = parseFloat(TotaleKm);

  // Convertiamo in numero l'eta del passeggero
  EtaPasseggero = parseInt(EtaPasseggero);

  if (EtaPasseggero < 18) percSconto = 20;
  else if (EtaPasseggero > 65) percSconto = 40;

  // Otteniamo il totale sconto in euro
  TotaleSconto = ((TotaleKm * costoPerKm) / 100) * percSconto;

  // Totale costo - Totale sconto
  prezzoTotale = TotaleKm * costoPerKm - TotaleSconto;

  console.log(`Il prezzo del biglietto è di € ${prezzoTotale.toFixed(2)}`);
}
