const num1 = getRandom(10, 101);
const nu1m = getRandom(10, 101);
const n1um = getRandom(10, 101);
const num2 = getRandom(2, 31);
const nu2m = getRandom(2, 31);
let str = '';
function showMath(){

    str = [num1, getrSign(),'(', num2, '*', nu2m, ')', getrSign(), nu1m, getrSign(), n1um ].join(' ') ;

    document.getElementById('str1').innerHTML = str;
}
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let arr = [];
function getrSign() {
    arr = ['-', '+' , '/'];
    let num = Math.floor(Math.random() * 4);
    switch (num) {
        case 0:
            return arr[0];
            break;
        case 1:
            return  arr[1];
            break;
        case 2:
            return  arr[2];
            break;
        default:
            return  arr[1];;
    }
}
function task2() {
    let answ = (eval(str)).toFixed(1) ;
    let input = document.getElementById('t1').value;
    if(input == answ) {
        document.getElementById('str2').innerHTML = 'answer : ' + answ + ', your answer is right';
        showMath();
    }else{
        document.getElementById('str2').innerHTML = 'please, try yet';
    }
}

