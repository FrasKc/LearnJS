var eleve1 = {
    nom: 'Jean' , 
    notes: [15, 16, 18, 2]
}

var eleve2 = {
    nom: 'Marc' , 
    notes: [5, 15, 20]
}

var moyenne = function(notes) {
    var somme = 0
    for(i = 0; i < notes.length; i ++) {
        somme = somme + notes[i]
    }
    return somme / notes.length
}

var estMeilleur = function(a , b) {
    if ((moyenne(eleve1.notes)) > (moyenne(eleve2.notes))) {
        return true
    } else {
        return false
    }
}
console.log(estMeilleur(eleve1, eleve2))