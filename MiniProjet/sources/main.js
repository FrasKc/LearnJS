const buttons = document.querySelectorAll("button")
            
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var joueur = buttons[i].innerHTML
    var computerChoice = Math.random()

    if (computerChoice < 0.33) {
        computerChoice = 'Pierre'
    } else if (computerChoice <= 0.66) {
        computerChoice = 'Feuilles'
    } else {
        computerChoice = 'Ciseaux'
    }
    ordi = computerChoice
    var resultat = "";
    if (joueur===ordi) {
      resultat = "Egalité !</br>" + joueur + " ne peut pas battre "+ ordi
    }
    else if ((joueur === "Pierre" && ordi === "Ciseaux") || (joueur === "Ciseaux" && ordi === "Feuilles") || (joueur === "Feuilles") && (ordi === "Pierre")) {
      resultat = "Vous avez gagné ! " + "</br>Voici votre choix : " + joueur + " </br>Voici le choix de l'adversaire : " + ordi
    }
    else {
      resultat = "Vous avez Perdu ! </br>L'ordinateur à joué : " + ordi + " </br>Vous avez joué : " + joueur
    }
  document.querySelector(".resultat").innerHTML = `
  ${resultat}
`  ;
    
  });
  
  
}