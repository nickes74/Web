/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var date = new Date();
var anneeActu = date.getFullYear();
var moisActu = date.getMonth()+1;
var jourActu = date.getDate();


function calculer(){
    var annee = document.getElementById("annee").value;
    var mois = document.getElementById("mois").value;
    mois-=1;
    var jour = document.getElementById("jour").value;
    
    var dateNais = new Date(annee,mois,jour);

    
    var jourTest = document.getElementById('joursR').checked;
    var moisTest = document.getElementById('moisR').checked;
    var anTest = document.getElementById('anneeR').checked;
    
    if (jourTest === true)
    {
        var diff = Math.round((date.getTime()-dateNais.getTime())/86400000);
        alert(diff);
        
    } else if (moisTest === true)
    {
        var diff = Math.round((date.getTime()-dateNais.getTime())/2629800000);
        alert(diff);
        
    }else if (anTest === true)
    {
        var diff = Math.round(anneeActu - annee);
        alert(diff);
    }else
    {
        alert("Valeurs incorrectes");
    }
}