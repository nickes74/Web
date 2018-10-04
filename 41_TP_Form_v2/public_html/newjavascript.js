/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function testBouton(event){
    var regexNom = new RegExp("/^([A-Z][a-z]+[ '-]?){1,2}$/","i");
    var nom = document.getElementById("nom").value;
    alert(nom);
    var test = regexNom.test(nom);
    alert(test);
    event.preventDefault();
//    if (test != true){
//        alert("Renseignement incorrect");
//        event.preventDefault();
//    }
}