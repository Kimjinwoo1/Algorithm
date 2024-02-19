function solution(my_string) {
    let answer = '';
    const deleteNum = ['a','e','i','o','u']
    
    for(let i=0; i< my_string.length; i++){
        if(!deleteNum.includes(my_string[i])){
            answer += my_string[i]
            console.log(answer)
        }
    }
    
    
    return answer;
}