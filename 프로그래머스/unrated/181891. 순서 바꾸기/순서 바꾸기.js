function solution(num_list, n) {
    let answer = [];
    
    for(let i = n; i < num_list.length ; i++){
        answer.push(num_list[i])
        console.log(answer)
    }
    for (let i = 0; i < n; i++) {
        answer.push(num_list[i]);
    }

    return answer;
}

//1. num_list의 n번째까지 배열을찾는다
//2. num_list의 n번째 이후 배열에
//3. num_list의 n번째 배열을 붙인다.