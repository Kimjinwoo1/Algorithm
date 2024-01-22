function solution(strArr) {
    return strArr.map((k,index)=> index % 2 == 0 ? k.toLowerCase() : k.toUpperCase())
}




// function solution(strArr) {
//     let answer = [];
    
//     for(let i =0; i< strArr.length; i++){
//         if(i % 2 == 0){
//             answer.push(strArr[i].toLowerCase())
//         }else{
//             answer.push(strArr[i].toUpperCase())
//         }
//     }
    
//     return answer;
// }