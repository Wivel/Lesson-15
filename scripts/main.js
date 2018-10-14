function isNumberInRange(num) {  // Проверяет условие "0<число<10"
    if (num > 0 && num < 10) {
        return true;
    } else {
        return false;
    }
}

function getDigitsSum(num) {
    let sum = 0;
    var num = String(num);                            // Если заменить var на Let, то функция перестаёт работать ...
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    return sum;
}

function isEven(num) {
    return num % 2 == 0;

}

function getDivisors(num) {
    var arr = [];
    for (let i=0;i<=num;i++){
        if (num%i==0){
            arr.push(i);
        }
    }
    return arr;
}