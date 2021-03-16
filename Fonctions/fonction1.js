var classe1 = [
  { nom: 'Marc', moyenne: 15 },
  { nom: 'Marion', moyenne: 10 },
  { nom: 'Antoine', moyenne: 4 }
]
var classe2 = [
  { nom: 'Sebastien', moyenne: 3 },
  { nom: 'Marine', moyenne: 18 },
  { nom: 'Pedro', moyenne: 9 },
  { nom: 'Violette', moyenne: 12 }
]

function afficheQuiALaMoyenne (eleves) {
  for (var i = 0; i < eleves.length; i++) {
    var eleve= eleves[i]
    if (eleve.moyenne < 10) {
      console.log(eleve.nom + ' a une moyenne inférieur à 10')
    }
  }
}
afficheQuiALaMoyenne(classe1)
afficheQuiALaMoyenne(classe2)
