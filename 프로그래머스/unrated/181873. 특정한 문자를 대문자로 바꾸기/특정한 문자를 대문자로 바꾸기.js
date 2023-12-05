function solution(my_string, alp) {
    let answer = '';
    
    for(let i=0 ; i < my_string.length; i++){
        const currentChar = my_string[i];
        if(currentChar === alp){
            answer += currentChar.toUpperCase();
        }else{
            answer += currentChar
        }
    } 
    return answer
}
