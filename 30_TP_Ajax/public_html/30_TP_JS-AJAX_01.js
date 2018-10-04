/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function requete(){
        doc= new XMLHttpRequest();
        doc.onreadystatechange = traitement;
        doc.open('GET', 'expositions.csv', false);
        doc.send(null);
 }
        
function traitement(){
    if(doc.readyState == 4){
        if(doc.status == 200){
            var resultat = doc.responseText;
            decoupeTexte(resultat);
    }else{
        alert("Erreur : " + doc.status);
        }
    }     
}
      
function decoupeTexte(resultat){      
    
club = resultat.split("\n");
var tr = "";
document.getElementById("result").innerHTML = "";

    for (var i = 0; i < club.length; i++) {
        var mot = club[i].split(";");
        tr += "<tr><td>" + mot[0] + "</td><td>" + mot[1] + "</td><td>" +  mot[2] + "</td></tr>";
}
document.getElementById("result").innerHTML = tr;
}