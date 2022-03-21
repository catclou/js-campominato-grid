let grid = document.getElementById("griglia");

// Genero 100 box
for (let i=1; i<=100; i++) {

    let box = document.createElement("div");
    // All'interno di ciascuna box attribuisco un 
    // numero random richiamando la funzione generica
    box.innerHTML += getRandomInt(1, 100);
    box.classList.add("box");
    griglia.appendChild(box);

    // Al click attribuisco una classe speciale all'elemento
    // circoscrivendolo con il this
    box.addEventListener('click', function(){
        console.log(this);
        this.classList.add("clicked");
    });
    
}

// Uso una funzione generica per creare randomicamente
// dei numeri
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max= Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}