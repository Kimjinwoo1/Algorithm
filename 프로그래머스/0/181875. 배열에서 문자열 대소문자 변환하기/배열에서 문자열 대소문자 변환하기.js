function solution(strArr) {
    let answer = [];
    
    for(let i =0; i< strArr.length; i++){
        if(i % 2 == 0){
            answer.push(strArr[i].toLowerCase())
        }else{
            answer.push(strArr[i].toUpperCase())
        }
    }
    
    return answer;
}

// 1. map을 돌려서 짝수면 그대로 홀수이면 LowerCase()로 변경