function solution(strArr) {
    let answer = strArr.filter((event)=> !event.includes('ad'))
    
    return answer;
}