var nombre = 43
var estPremier = true
for (var i = 2; i < nombre; i ++) {
    if (nombre % i === 0) {
        estPremier= false
        console.log("Ce nombre n'est pas premier")
        console.log(nombre + " est divisible par : " + i)
        break
    }
    if (estPremier) {
        console.log(nombre + " est premier")
        break
    }
}