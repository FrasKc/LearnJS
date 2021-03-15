var eleves = [{nom: "Marc", moyenne: 15}, {nom : "Marion", moyenne: 10} , {nom: "Antoine" , moyenne: 4}]
for (var i = 0; i < eleves.length; i++) {
    if (eleves[i].moyenne < 10) {
        console.log(eleves[i].nom + " n'a pas la moyenne")
    } else {
        console.log(eleves[i].nom + " a la moyenne")
    }
}