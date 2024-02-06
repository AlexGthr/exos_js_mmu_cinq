// Version avec input type number

// Je récupère les éléments du DOM qui m'interesse
let inputConversionNumber = document.getElementById("inputConversionN")
let resultatNumber = document.getElementById("resultatN")

// Puis je crée un event "input" sur le champ, qui fera la conversion à chaque entrée d'une valeur
inputConversionNumber.addEventListener("input", function() {
    let calcul = inputConversionNumber.value * 6.55957
    resultatNumber.textContent = calcul.toFixed(2);
})


// Version avec input type text 

// Je récupère les éléments du DOM qui m'interesse
let inputConversionText = document.getElementById("inputConversionT")
let resultatText = document.getElementById("resultatT")

// Puis je crée un event "input" sur le champ, qui fera la conversion à chaque entrée d'une valeur
inputConversionText.addEventListener("input", function() {
    
    if(inputConversionText.value === "") { // Si le champ est vide alors :
        
        resultatText.textContent = "0 franc"

    }
    else if (isNaN(inputConversionText.value)) { // Si la value est du text et pas un number
        
        resultatText.textContent = "Ceci n'est pas un chiffre/nombre.";

    } else { 
        // Si tout vas bien, alors fais le calcul
        let calcul = inputConversionText.value * 6.55957;
        resultatText.textContent = calcul.toFixed(2) + " franc";

    }
})



