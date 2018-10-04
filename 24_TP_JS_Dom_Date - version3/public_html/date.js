/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var date = new Date();
//document.getElementById("annee").onload = menuAn();
document.getElementById("annee").addEventListener("load", menuAn());

function init(){
    menuAn();
    menuJour();
}

function menuAn(){
    var select = document.getElementById('annee');
    select.innerHTML="";
    for (i=1900; i<=date.getFullYear();i++){
       var opt = document.createElement('option');
       opt.text = i;
       opt.value = i;
       select.add(opt);
    }
}

function menuJour(){
    var jour=0;
    var annee = document.getElementById("annee").value;
    var mois = document.getElementById("moisN").value;
    //alert(annee + " "+ mois);
    
    if(mois==1 || mois==3 || mois==5 || mois==7 || mois==8 || mois==10 || mois==12){
            jour = 31;
        }else if(mois==2 && annee%4==0){
            jour = 29; 
        }else if(mois==2 && annee%4!=0){
            jour = 28;
        }else{
            jour=30;
        }   
    
    //alert(jour);
        
    var selectJ = document.getElementById('jourN');
    selectJ.innerHTML="";
    for (i=1; i<=jour;i++){      
       var optJ = document.createElement('option');
       optJ.text = i;
       optJ.value = i;
       selectJ.add(optJ);
    }
}

function calculer(){
    var anneeT = document.getElementById("annee").value;
    //alert(anneeT);
    var moisT = document.getElementById("moisN").value;
    moisT-=1;
    //alert(moisT);
    var jourT = document.getElementById("jourN").value;
    //alert(jourT);
    
    var dateNais = new Date(anneeT,moisT,jourT);
    alert(dateNais);
    
    var jourTest = document.getElementById('joursR').checked;
    var moisTest = document.getElementById('moisR').checked;
    var anTest = document.getElementById('anneeR').checked;
    
    if (jourTest === true)
    {
        var diff = Math.round((date.getTime()-dateNais.getTime())/86400000);
        alert(diff);   
    } else if (moisTest === true)
    {
        var diff = Math.round((date.getMonth()-dateNais.getMonth()));
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