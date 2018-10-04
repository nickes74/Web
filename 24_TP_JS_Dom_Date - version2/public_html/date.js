/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var date = new Date();

function menuAn(){

    for (i=1900; i<=date.getFullYear();i++){
       var select = document.getElementById('annee');
       var opt = document.createElement('option');
       opt.text = i;
       opt.value = i;
       select.add(opt);
    }
}

function calculer(){
    var anneeT = document.getElementById("annee").value;
    alert(anneeT);
    var moisT = document.getElementById("moisN").value;
    alert(moisT);
    var jourT = document.getElementById("jour").value;
    alert(jourT);
    
    var dateNais = new Date(anneeT,moisT,jourT);
    
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
        var diff = Math.round(date.getFullYear()-anneeT);
        alert(diff);
    }else
    {
        alert("Valeurs incorrectes");
    }
    
    
}