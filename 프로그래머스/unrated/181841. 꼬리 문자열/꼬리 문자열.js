function solution(str_list, ex) {
    const result = str_list.filter((event)=> !event.includes(ex))
    
    const splitRt = result.join('')
    console.log(splitRt)
    
    return splitRt;
}