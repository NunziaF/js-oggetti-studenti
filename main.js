
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età

var studente = {
  "nome": "Piergiorgio",
  "cognome": "Valzano",
  "eta": 33
};

// Stampare a schermo attraverso il for in tutte le proprietà;

for (var key in studente){
  console.log(key + " " + studente[key]);
}

// Creare un array di oggetti di studenti

var studenti = [
  {
    "nome": "Patrizia",
    "cognome": "Garganese",
    "eta": 31
  },
  {
    "nome": "Luigi",
    "cognome": "Mangia",
    "eta": 32
  },
  {
    "nome": "Antonio",
    "cognome": "Spagnolo",
    "eta": 36
  }
];

// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

for (var i = 0; i < studenti.length; i++){
  var studente1 = studenti[i];
  var nomeStudente = studente1.nome;
  var cognomeStudente = studente1.cognome;
  console.log(nomeStudente + " " + cognomeStudente);
}
