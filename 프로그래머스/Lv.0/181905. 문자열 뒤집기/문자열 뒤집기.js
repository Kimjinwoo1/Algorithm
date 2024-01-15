function solution(my_string, s, e) {
    let rangeNum = '';
    
    for(let i=s; i<=e ; i++){
        rangeNum += my_string[i]
    }
    
    let reverseNum = rangeNum.split('').reverse().join('')
    
    const answer = my_string.slice(0,s)+reverseNum+my_string.slice(e+1)
    
    console.log(answer)
    
    return answer

}