function solution(s){
    const lowercaseString = s.toLowerCase();
    
    const pCount = lowercaseString.split('p').length-1
    const yCount = lowercaseString.split('y').length-1
    
    return pCount == yCount

    

}

// 0. 소문자로 통일해서 s를 만들고
// 1. p 와 y의 갯수를 비교 한다
// 2. 같을경우 t 아닐경우 f 값 반환