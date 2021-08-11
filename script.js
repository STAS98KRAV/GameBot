'use strict';
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let a;
let  qestion1, qestion2,qestion3;
let answer; 

function gameNew(a){
    answer = prompt('Угадай число от 1 до 100');
    if (answer === null){
        alert('Игра окончена');
        return;
    }
    if(!isNumber(answer)) {
        alert('Введи число');
        return gameNew(a);
    }
    answer = Number(answer);
    
    return function () { 
        if(answer > a){
            alert('Загаданное число меньше');
            return gameNew(a);
        }
        if(answer < a) {
            alert('Загаданное число больше');
            return gameNew(a);
        }
        if (answer === a) {
            alert('Поздравляю, вы угадали!');
        }
    }();
}
gameNew(45);