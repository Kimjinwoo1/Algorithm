function solution(q, r, code) {
    let answer = '';
    for(let i = 0 ; i < code.length; i++){
        if(i % q == r){
            answer += code[i]
        }
    }
    
    return answer;
}

//1.q를 code index를 나눈다.
//2.그나머지가 r인 걸 찾는다.
//3.나머지가 r인 부분을 나열한다.