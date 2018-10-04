/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function requete(){
        doc= new XMLHttpRequest();
        doc.onreadystatechange = traitement;
        doc.open('GET', 'expositions.xml', false);
        doc.send(null);
 }
        
function traitement(){
    if(doc.readyState==4){
        if(doc.status==200){
            var resultat = doc.responseXML;
            decoupeTexte(resultat);
    }else{
        alert("Erreur : " + doc.status);
        }
    }     
}
      
function decoupeTexte(resultat){      
    
  
    var club = resultat.getElementsByTagName("expo"); 

        var table = document.getElementById("result");
            table.innerHTML="";
        
    for (var i = 0; i < club.length; i++) {
            
        var tr = document.createElement("tr");
        table.appendChild(tr);    
    
        var nomClub= club[i].getElementsByTagName("nomClub").item(0).firstChild.nodeValue;

        var td = document.createElement("td");
                    td.textContent = nomClub;
                    tr.appendChild(td);
                    
        var theme= club[i].getElementsByTagName("theme").item(0).firstChild.nodeValue;

        var td = document.createElement("td");
                    td.textContent = theme;
                    tr.appendChild(td); 
                    
        var date= club[i].getElementsByTagName("date").item(0).firstChild.nodeValue;
   
        var td = document.createElement("td");
                    td.textContent = date;
                    tr.appendChild(td); 

    }
    }

