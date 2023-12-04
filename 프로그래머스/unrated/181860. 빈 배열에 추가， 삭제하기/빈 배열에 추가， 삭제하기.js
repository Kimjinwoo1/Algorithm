function solution(arr, flag) {
    let answer = [];
    
    for(let i = 0; i < arr.length; i++){
        if(flag[i]){
            for(let j=0; j < arr[i]*2; j++){
                answer.push(arr[i])
            }
        }else{
            answer.splice(-arr[i])
        }
    }
    
    return answer;
}

// 1.flag[i] => true이면 arr[i]x2를해서 빈배열에 추가
// 2.flag[i] => false이면 arr[i]를 제거
// 3.결과값 return 