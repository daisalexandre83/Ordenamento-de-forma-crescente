function ordemCrescente(n1,n2,n3){
    n1 = parseFloat(n1);
    n2= parseFloat(n2);
    n3=parseFloat(n3);
    ordem1;
    ordem2;
    ordem3;

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
        
    }

}

var n1 = prompt('Digite o número A');
var n2 = prompt('Digite o número B');
var n3 = prompt('Digite o número C');

ordemCrescente(n1,n2,n3);