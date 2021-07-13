function exibir(n1,n2,n3) {

     n1 = parseInt(n1);
     n2 = parseInt(n2);
     n3 = parseInt(n3);


    if( n1 <= n2 && n1 <= n3 ){
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
    }


   
   

  return exibir;




}

var n1 = prompt('Digite o valor de A');
var n2 = prompt('Digite o valor de B');
var n3 = prompt('Digite o valor de C');

document.write(' A ordem é: ' + exibir(n1,n2,n3) + '');
