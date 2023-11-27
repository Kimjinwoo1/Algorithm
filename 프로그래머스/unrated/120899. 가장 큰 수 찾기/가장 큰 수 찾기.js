function solution(array) {
    let maxNum = array[0];
    let maxIndex = 0;
    
    for(let i = 0; i <array.length; i++){
        if(array[i] > maxNum){
            maxNum = array[i]
            maxIndex = i
        }
    }
    return [maxNum,maxIndex];
}


// 1.array에 가장 큰수찾기
// 2.가장 큰수에 index 를 찾는다
// 3.결과값을 return 한다.