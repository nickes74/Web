/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
  

function press(){
      document.getElementById("idImage").src = "images/shadow-proof.jpg";
      document.getElementById("idDivPreuve").style.display= "block";
}

function depress(){
      var image = document.getElementById("idImage");
        image.setAttribute("src","images/shadow-illusion.jpg");
        document.getElementById("idDivPreuve").style.setProperty("display","none");
}