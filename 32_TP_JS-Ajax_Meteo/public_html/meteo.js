/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var url = "https://www.prevision-meteo.ch/services/json/creteil";


//var date = new Date();
//var annee = date.getFullYear();
//var mois = date.getMonth()+1;
//var jour = date.getDate();
//if (mois < 10){
//    var dateJour = jour+".0"+mois+"."+annee;
//}else var dateJour = jour+"."+mois+"."+annee;

var table="";

$(document).ready( function () {
               table = $('#tableau').DataTable({
                   language: {
                    url: "francais.json"
                } 
            });
        });         
            
function requete(){
    $.ajax({
        type: 'POST',
        url: url,
        data: "req=hour&tmp",
        success: traitement
    });
}

function traitement(resultat){
    
    console.log(resultat);
    
    for (var i = 0; i < 24; i++) {

        if (i<10){ 
            var c = '0';
        }else{c = "";}
        
        table.row.add([
                c+i+'H00',
                resultat.fcst_day_0.hourly_data[i+'H00'].TMP2m
            ]).draw();
      
    }
}