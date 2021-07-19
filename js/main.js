function ordemCrescente(n1,n2,n3) {
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    n3 = parseInt(n2);

    if (n1 <=2 && n1 <= n3) {
        document.write('A ordem 1 é: ' + n1 +'<br>');
    }
    if( n2 <= n3){
        document.write('A ordem 2 é: ' + n2 +'<br>');
    } 
    
   

   

}

var n1 =prompt('Digite o valor de A');
var n2 =prompt('Digite o valor de B');
var n3 =prompt('Digite o valor de C');

ordemCrescente(n1,n2,n3);