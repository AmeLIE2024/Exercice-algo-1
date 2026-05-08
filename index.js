//Exercice 1 - Générateur de pseudo
function generatePseudo (prenom,nombre){
    return prenom + "_" + nombre;
}

console.log(generatePseudo("Alex",42));
console.log(generatePseudo("Sam",7));

//Exercice 2 - Message personnalisé
function creerMessage(prenom,ville){
    return "Bonjour "+ prenom +", bienvenue à " + ville;
}

console.log(creerMessage("Lina", "Paris"));
console.log(creerMessage("Tom","Lyon"));

//Exercice 3 - Vérifier un âge
function estMajeur(age){
    if(age>=18) {
        return true
    }else return false;
}

console.log(estMajeur(20));
console.log(estMajeur(16));

//Exercice 4 - Calcul de prix avec réduction
function calculerPrixFinal(prix, reduction){
    const total = prix - reduction;
    return "prix : " + prix + ", reduction : " + reduction + " -> " + total;
}

console.log(calculerPrixFinal(100,20));

//Exercice 5 - Formater une note
function formaterNote(note){
    if(note>=10 && note<=20){
        return note +" -> Validé"
    }else return note +" -> Refusé"
}

console.log(formaterNote(15));
console.log(formaterNote(8));

//Exercice 6 - Choisir une couleur selon température
function couleurTemperature(temperature){
    if(temperature<10){
        return temperature + " -> bleu"
    }else if(temperature>25){
        return temperature + " -> rouge"
    }else return temperature + " -> orange";
}

console.log(couleurTemperature(5));
console.log(couleurTemperature(20));
console.log(couleurTemperature(30));

//Exercice 7 - Initiales
function initiales(prenom,nom){
     return prenom + ", " + nom + " -> " + prenom.substring(0,1) + "." +nom.substring(0,1);
}

console.log(initiales("John","Doe"));

//Exercice 8 - Compter les caractères
function compterLettre(chaine){
    return chaine + " -> " + chaine.length;
}

console.log(compterLettre("chat"));
console.log(compterLettre("bonjour"));

//Exercice 9 - Statut de commande
function statutCommande(paye,expedie){
    if(paye === false ){
        return "En attente"
    } else if (paye === true && expedie === false){
        return "En cours"
    }else if (paye === true && expedie === true){
        return "livré"
    }
}

console.log("statutCommande(false, false) → " + statutCommande(false,false));
console.log("statutCommande(true, false) → " + statutCommande(true,false));
console.log("statutCommande(true, true) → " + statutCommande(true,true));

//Exercice 10 - Générer une adresse email
function genererEmail(prenom,nom){
    return prenom.toLowerCase().concat(".",nom.toLowerCase(),"@simplon.co")
}

console.log("genererEmail(\"Michel\", \"Durand\") → " + genererEmail("Michel", "Durand"));
console.log("genererEmail(\"Léa\", \"Martin\") → " + genererEmail("Léa", "Martin"));