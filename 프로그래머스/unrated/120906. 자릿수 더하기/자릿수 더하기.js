function solution(n) {   
    let arrN= n.toString()
    
    let sum = 0
    
    for(let i = 0 ; i < arrN.length; i++ ){
        sum += +(arrN[i])
    }
    
    return sum;
}