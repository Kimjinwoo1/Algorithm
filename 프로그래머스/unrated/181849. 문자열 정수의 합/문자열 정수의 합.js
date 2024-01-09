function solution(num_str) {
    let answer = 0;
    
    for(let i = 0; i<num_str.length; i ++){
        answer += +num_str[i]
    }
    
    return answer;
}

// 문자열을 숫자형식으로 풀고
// 모두 더하기