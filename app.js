// let a = +prompt ('Ведите первый операнд');
// let b = +prompt ('Ведите второй операнд');
// let result = prompt('Математическое действие');

function calc(a,b,result) {
    if ((a =='') || (b == '') || (result == '') || (typeof a != 'number') || (typeof b !='number')) {
        alert('ERROR');
       }  else if (result == '+') {
            alert(a + b);
       } else if(result == '-') {
           alert(a - b);
       } else if(result =='/') {
           alert(a / b);
       } else if(result =='*') {
        alert(a * b);
       } else if(result =='**') {
        alert(a ** b);
       } else {
           alert('unknown operetion');
       }

    }
    calc(a, b, result);