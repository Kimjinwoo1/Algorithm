function solution(s) {
    const number = {
       "zero" : 0,
       "one" : 1,
       "two" : 2,
       "three" : 3,
       "four" : 4,
       "five" : 5,
       "six" : 6,
       "seven" : 7,
       "eight" : 8,
       "nine" : 9,
    }
        let answer = '';
        let currentNum = '';
    
    for(let i = 0; i < s.length; i++){
        const sunNum = s[i]

        if(isNaN(sunNum)){
            currentNum += sunNum
            
            if(number[currentNum] !== undefined){
                answer += number[currentNum]
                currentNum = '';
                  }
            }else{
                answer += sunNum
            }
    }
    console.log(answer)
    return +answer
}

