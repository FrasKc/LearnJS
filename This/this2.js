var eleve = {
  nom: 'Jean',
  present: function () {
    var eleve = this
    var demo = {
        demo: function() {
            console.log(eleve.nom)
        }
    }
    demo.demo()
    console.log(this.nom + ' est présent')
  }
}
eleve.present()
