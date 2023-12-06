function solution(a, b) {
    let answer = 0;
    
    if(a % 2 !== 0 && b % 2 !== 0){
      return answer = (a * a) + (b * b)
        
    }if(a % 2 !== 0 || b % 2 !== 0) {
      return  answer = 2*(a+b)
    }if(a % 2 === 0 && b % 2 === 0) {
      return  answer = Math.abs(a-b)
    }
}

// 1. a와 b가 홀수이면 a제곱 , b 제곱
// 2. a와 b중 하나만 홀수라면 2x(a + b)
// 3. a와 b 모두 홀수가 아니면 a - b