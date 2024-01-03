function solution(n_str) {
    let index = 0;
    
    if(n_str[index] === "0"){
        while(index < n_str.length && n_str[index] === '0'){
            index++
        }
    }
    return n_str.substring(index);
}

// 가장 왼쪽에 0이 있으면 없앤후
// return을 해보자