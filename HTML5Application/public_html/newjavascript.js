/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nombre=5;
multi = prompt('Entrez un nombre entier','9');
 
for (i=1; i<=multi; i++)
{
document.write('<tr><td>'+ nombre + ' x ' + i +'</td>');
document.write('<td>'+ multiplication(i,nombre) +'</td></tr>');
}