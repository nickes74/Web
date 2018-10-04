/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var min = 1;
var max = 100;
var nbMystere = Math.round((max-min)*Math.random()) + min;
var nbEssai = 7;

function solution(){
    alert(nbMystere);
}

function proposer(){
    var nb= document.getElementById("saisie").value;
    if(nb<nbMystere){
        document.getElementById('message').value="Trop petit";
        nbEssai--;
        document.getElementById('essai').value=nbEssai;
        document.getElementById('reponse').value+=(nb + " - ");
    }else if(nb>nbMystere){
        document.getElementById('message').value="Trop grand";
        nbEssai--;
        document.getElementById('essai').value=nbEssai;
        document.getElementById('reponse').value+=(nb + " - ");
    }else{
        alert("BRAVO");
    }
    if (nbEssai==0){
        alert("PERDU!! Le nombre mystère était: " + nbMystere);
        init();
    }
}

function init(){
    location.reload();
    document.getElementById("saisie").value="";
    document.getElementById('message').value="";
    document.getElementById('essai').value="7";
    document.getElementById('reponse').value="";
}