function solution(n) {

    let Pi = 6;
    while(Pi % n !== 0){
        Pi += 6
    }
    return Pi / 6 
}

// 한판에 6조각
// 사람수n
// 모두 같은 수의 피자를 먹어야 하면 몇판인가..? 