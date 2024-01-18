function solution(n) {
    let sqrtNum = Math.sqrt(n);
    
    if (Number.isInteger(sqrtNum)) {
        return 1;
    } else {
        return 2;
    }
}