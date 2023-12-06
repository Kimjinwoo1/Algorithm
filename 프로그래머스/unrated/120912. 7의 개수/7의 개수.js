function solution(array) {
    let count = 0;
    
    
    for(let i= 0 ; i < array.length; i++) {
        
        const digit = String(array[i])
        console.log(digit)
        
        for(let j = 0; j < digit.length ; j ++){
            if(digit[j] === '7'){
                count ++
            }
        }
    }
    
    return count;
}