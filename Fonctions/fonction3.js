var phrase = "Hey on est bien bien bien ici c'est super ici !"

var frequence = function(phrase){
    var mots = phrase.toLowerCase().split(" ")
    var compteur = {}
    for (var i = 0; i < mots.length; i++) {
      var mot = mots[i]
      if (compteur[mot] === undefined) {
        compteur[mot] = 1
      } else {
        compteur[mot]++
      }
    }
    console.log(compteur)
}
frequence("Salut les potes")
frequence(phrase)