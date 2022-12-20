/*
PRIMA PARTE
1. Creo costanti per nome, km, età e bottoni
2. Creo una funzione al click sul bottone generale
3. console.log all'interno della funzione per verificare i valori inseriti dall'utente
4. condizionale: 
 - se sei più piccolo di 18 hai uno sconto del 20%
 - se invece sei più grande di 65 hai uno sconto del 40%
 - altrimenti il prezzo è normale
5. Output prezzo finale
*/


const nameInput = document.getElementById("name-input");
const kmInput = document.getElementById("km-input");
const ageSelection = document.getElementById("age-selection");
const submitButton = document.getElementById("submit-button");
const deleteButton = document.getElementById("delete-button");
const passengerName = document.getElementById('passenger-name');
const promotion = document.getElementById('promotion');
const carrozza = document.getElementById('carrozza');
const cpCode = document.getElementById('cp-code');
const price = document.getElementById('price');

const constRandom = Math.random();


submitButton.addEventListener('click',
    function(){

        console.log('Il nome del passeggero è', nameInput.value);

        console.log('I km che deve percorrere sono', kmInput.value);

        console.log("La fascia d'età del passeggero è", ageSelection.value);


        // condizioni prezzo biglietto
        let ticketPrice = (kmInput.value * 0.21);

        if (ageSelection.value == 'Minorenne'){
            ticketPrice = ticketPrice - ((ticketPrice * 20) / 100);
            alert('il tuo biglietto è ridotto del 20%');
            promotion.innerHTML = 'Biglietto Ridotto Minorenni';
            console.log('il prezzo del biglietto sotto ai 18 è', ticketPrice);
        }
        else if (ageSelection.value == 'Over65'){
            ticketPrice = ticketPrice - ((ticketPrice * 40) / 100);
            alert('il tuo biglietto è ridotto del 40%');
            promotion.innerHTML = 'Biglietto Silver';
            console.log('il prezzo del biglietto sopra ai 65 è', ticketPrice);
        }
        else{
            console.log('il prezzo del biglietto intero è', ticketPrice);
            promotion.innerHTML = 'Biglietto Standard';
        }

        // output
        passengerName.innerHTML = nameInput.value;
        carrozza.innerHTML = (constRandom * 10).toFixed(0);
        cpCode.innerHTML = (constRandom * 100000).toFixed(0);
        price.innerHTML = '€ ' + ticketPrice.toFixed(2);

    }
)


