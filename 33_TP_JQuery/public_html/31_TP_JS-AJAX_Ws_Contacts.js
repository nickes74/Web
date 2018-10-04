/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var url = "http://10.75.96.104:81/ws_contacts/ajax.php";
var table="";

  $(document).ready( function () {
               table = $('table').DataTable({
                   language: {
                    url: "DataTables/media/French.json"
                } 
            });
        });         
              
      

function requete(){
    $.ajax({
        type: 'POST',
        url: url,
        data: "req=contact",
        dataType: 'json',
        success:recup
    });
    }
    
function recup(reponse){  
    $('#chargeur').hide();

        for (var i = 0; i < reponse.length; i++) {
                           
        table.row.add( [reponse[i].numero, 
                reponse[i].nom,
                reponse[i].adresse,
                reponse[i].code_postal,
                reponse[i].ville, 
                reponse[i].code_secteur]
        ).draw();

}
}

//console.log(contacts);
