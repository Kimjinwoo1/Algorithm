function solution(n, t) {
    let answer = 1;
    
    for(let i=0 ; i < t ; i++){
        answer *= 2
    }
    
    return n*answer;
}
