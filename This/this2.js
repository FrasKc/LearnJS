var eleve = {
  nom: 'Jean',
  present: function () {
    var self = this
    var demo = {
        demo: function() {
            console.log(self.nom)
        }
    }
    demo.demo()
    console.log(self.nom + ' est présent')
  }
}
eleve.present()
