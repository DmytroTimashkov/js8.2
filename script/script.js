function smallestDivisor(num){
    if (num === 1)return 1;
    if (num<=0)return NaN
    for (let i = 1; i <= num ;i++){
        if (num / i === num)continue;
        if (Number.isInteger(num /i)) return i;
    }
}

console.log(smallestDivisor(57))