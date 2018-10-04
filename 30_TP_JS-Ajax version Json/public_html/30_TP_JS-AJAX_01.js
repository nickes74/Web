/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function requete(){
        doc= new XMLHttpRequest();
        doc.onreadystatechange = traitement;
        doc.open('GET', 'expositions.json',true);
        doc.send();
 }
        
function traitement(){
    if(doc.readyState==4){
        if(doc.status==200){
            var resultat = JSON.parse(doc.responseText);
            decoupeTexte(resultat);
    }else{
        alert("Erreur : " + doc.status);
        }
    }     
}
      
function decoupeTexte(resultat){      

        var table = document.getElementById("result");
            table.innerHTML="";
        
    for (var i = 0; i < resultat.length; i++) {
            
        var tr = document.createElement("tr");
        table.appendChild(tr);    
    
        var nomClub= resultat[i].nomClub;

        var td = document.createElement("td");
                    td.textContent = nomClub;
                    tr.appendChild(td);
                    
        var theme= resultat[i].theme;

        var td = document.createElement("td");
                    td.textContent = theme;
                    tr.appendChild(td); 
                    
        var date= resultat[i].date;
   
        var td = document.createElement("td");
                    td.textContent = date;
                    tr.appendChild(td); 

    }
    }

