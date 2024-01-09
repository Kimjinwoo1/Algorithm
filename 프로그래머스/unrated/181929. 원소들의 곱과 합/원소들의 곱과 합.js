function solution(num_list) {
    let gop = 1;
    let sum = 0;
    for(let i =0 ; i < num_list.length;i++){
        sum += num_list[i]
        gop *= num_list[i]
        // console.log(sum)
        }
        if(gop < sum*sum){
            return 1
        }else {
            return 0
        }  
}

// 모든원소의 곱 변수생성
// 모든원소 합 변수생성
// 두수 비교 작으면 1 크면 0 을 return