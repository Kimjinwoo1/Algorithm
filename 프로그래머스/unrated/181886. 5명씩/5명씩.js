function solution(names) {
    let answer = []
    
    for(let i=0; i<names.length; i +=5){
        answer.push(names[i])
    }
    return answer
}
// 1. 배열에 5개씩 끈어서 
// 2. 가장 앞에있는 문자만 뽑아낼수있도록해보자.