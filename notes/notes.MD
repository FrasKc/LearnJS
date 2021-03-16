variable déclarer dans une fonction pas accessible en dehors
function ont accès au fonction extérieur tout dépend de comment on l'a déclarer :  
var demo = funtcion() {}   || accès à tout ce qu'il y a dehors
function demo() {} || accès à tout ce qu'il y a dehors mais après la fonction

Variables ont une portée limitée seulement dans le cadre d'une fonction

Hoisting : 

prendre toutes les déclarations de variable et les mets au dessus

ex : console.log(a)
     var a = 3 

     result = undefined