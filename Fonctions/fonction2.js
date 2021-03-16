var classe1 = [
  { nom: 'Marc', moyenne: 15 },
  { nom: 'Marion', moyenne: 10 },
  { nom: 'Antoine', moyenne: 4 }
]

var ALaMoyenne = function (eleves) {
  var moyennes = []
  for (var i = 0; i < eleves.length; i++) {
    var eleve = eleves[i]
    if (eleve.moyenne >= 10) {
      moyennes.push(eleve)
    }
  }
  return moyennes
}

console.log(ALaMoyenne(classe1))