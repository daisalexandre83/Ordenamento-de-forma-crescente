var num1 = parseInt(prompt('Digite o valor de A'));
num2 = parseInt(prompt('Digite o valor de B'));
num3 = parseInt(prompt('Digite o valor de C'));

if ( num1 < num2 && num1 < num3) {
    document.write(num1 + '<br>');
    if (num2 < num3) {
        document.write( num2 + '<br>')
        document.write(num3 + '<br>');
    } else{
        document.write(num3 + '<br>');
        document.write(num2 + '<br>');
    }
} else if( num2 < num3 && num2 < num1){
    document.write(num2 + '<br>');
    if ( num3 < num1) {
        document.write(num3 + '<br>');
        document.write(num1 + '<br>');
    }else{
        document.write(num1 + '<br>');
        document.write(num3 + '<br>');
    }
} else{
    document.write(num3 + '<br>');
    if (num1 < num2) {
        document.write(num1 + '<br>');
        document.write(num2 + '<br>');
    } else{
        document.write(num2 + '<br>'); 
        document.write(num1 + '<br>');
    }
}
