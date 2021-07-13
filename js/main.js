function exibir() {

     n1 = parseInt(n1);
     n2 = parseInt(n2);
     n3 = parseInt(n3);
     ordem1 = 0;
     ordem2 = 0;
     ordem3 = 0;


   /* if( n1 <= n2 && n1 <= n3 ){
       document.write('O número na posição 1 é: ' + n1 +'<br>');
    } else if( n2 <= n1 && n2 <= n3){
        document.write('O número na posição 1 é: ' + n2 + '<br>')
    } else{
        document.write('O número na posição 1 é: ' + n3 +'<br>');
    }
   
    if(n1 >= n2 && n1 >= n3){
        document.write('O número na posição 2 é: ' + n1 +'<br>');
    } else if(n2 >= n1 && n2 >= n3){
        document.write('O número na posição 2 é: '+ n2 +'<br>');
    } else {
        document.write('O número na posição 2 é: ' + n3 +'<br>');
    }

    if( n1 > n2 && n1 != n2 && n1 > n3 && n1 != n3 ){
        document.write('O número na posição 3 é: ' + n1 +'<br>');
    } else if(n2 > n1 && n2 != n1 && n2 > n3 && n2 != n3){
        document.write('O número na posição 3 é: ' + n2 +'<br>');
    } else{
        document.write('O número na posição 3 é: ' + n3 +'<br> ');
    }*/


    if (n1 < n2 && n1 < n3){
       document.write(' ' + ordem1 == n1 +'<br> ');
   }
   if (n2 < n3) {
       document.write('' + ordem2 == n2 + '<br>');
       document.write(' ' + ordem3 == n3 + '<br>')
   } else{
       document.write(' ' + ordem2 == n3 + '<br>');
   }

   document.write(' A ordem é: ' + exibir() + '');

}

var n1 = prompt('Digite o valor de A');
var n2 = prompt('Digite o valor de B');
var n3 = prompt('Digite o valor de C');

exibir();