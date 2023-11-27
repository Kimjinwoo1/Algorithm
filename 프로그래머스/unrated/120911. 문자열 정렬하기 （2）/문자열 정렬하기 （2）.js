function solution(my_string) {
    let rowCaseStr = my_string.toLowerCase();
    let sortStr = rowCaseStr.split('').sort().join('')
    
    
    return sortStr;
}