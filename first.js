
function randomInteger(min, max) {
    
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

var number = 1;
var answer = 1;
number = randomInteger(1,99);
alert(number)

do{
    console.log(answer);
    answer = prompt("Jūsu skaitlis");
    if(answer!=number) {
        if (answer>number) {
            alert("Jūsu skaitlis ir lielāks par manu skaitli. Mēģiniet vēlreiz! ");
        } else {
        alert("Jūsu skaitlis ir mazāks par manu skaitli. Mēģiniet vēlreiz! "); 
        }
    }

} while(number != answer)
alert("Jūs uzvarējāt!!!!")