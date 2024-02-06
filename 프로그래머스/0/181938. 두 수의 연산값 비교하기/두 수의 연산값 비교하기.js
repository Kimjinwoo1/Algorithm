function solution(a, b) {
    const hapNum = +(a.toString()+b.toString())
    const multiNum = 2 * a * b
    
    
    return Math.max(hapNum,multiNum)
    

}