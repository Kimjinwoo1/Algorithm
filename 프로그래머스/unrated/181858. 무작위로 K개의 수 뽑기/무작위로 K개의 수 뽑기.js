function solution(arr, k) {
    let answer = [];
    
    let cutSet = new Set();
    
    for(let i = 0; i < arr.length; i++){
        if(!cutSet.has(arr[i])){
            answer.push(arr[i])
            cutSet.add(arr[i])
        }
    }
    if(answer.length < k) {
        for(let i = answer.length; i < k; i++){
         answer.push(-1)
        }
    }    
    return answer.slice(0,k)
}