function ordemCrescente(n1,n2,n3,ordem1,ordem2,ordem3){
    n1 = parseInt(n1);
    n2= parseInt(n2);
    n3=parseInt(n3);
    ordem1 = parseInt(ordem1);
    ordem2 = parseInt(ordem2);
    ordem3 = parseInt(ordem3);

    if(n1 <= n2 && n1 <= n3){
        ordem1 = n1;
    }
    if(n2 <= n3){
        ordem2 = n2;
        ordem3 = n3;
    }else{
        ordem2 = n3;
        ordem3 = n2;
    }

    if(n2 <= n3 && n2 <= num1){
        ordem1 =n2;
    }
    if(n1 <= n3){
        ordem2 = n1;
        ordem3 = n3;
    } else{
        ordem2 = n3;
        ordem3 = n1;
    }
    
    if( n3 <= n1 && n3 <= n2){
        ordem1 = n3;
    }
    if(n2 <= n1){
        ordem2 = n1;
        ordem3 = n2;
    }

     return ordemCrescente(n1,n2,n3,ordem1,ordem2,ordem3);

    
}

var n1 = prompt('Digite o número A');
var n2 = prompt('Digite o número B');
var n3 = prompt('Digite o número C');

document.write('Os números em ordem crescente é: ' + ordem1 +', ' + ordem2 + ', ' + ordem3 +'');
