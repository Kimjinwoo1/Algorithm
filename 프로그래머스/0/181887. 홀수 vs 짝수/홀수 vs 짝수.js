function solution(num_list) {
    let zakNum = 0;
    let holNum = 0;
    
    for(let i=0; i<num_list.length; i++){
        if(i % 2 === 0 ){
           zakNum += num_list[i] 
        }else{
            holNum += num_list[i]
        }
    }
    
     return Math.max(zakNum, holNum);
}