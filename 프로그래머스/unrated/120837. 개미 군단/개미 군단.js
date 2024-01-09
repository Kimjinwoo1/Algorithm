function solution(hp) {

    let BBG = Math.floor(hp / 5)
    hp %= 5
    let MMG = Math.floor(hp / 3)
    hp %= 3
    
    return BBG+MMG+hp
}

// 체력에 딱 맞는 병력을 대리고나간다.
// 장군개미 5 , 병정개미 3, 일개미 1
// 각 개미 변수지정
// 큰개미부터 hp를 나눠서 나머지를 다음 개미 그다음 나머지를 다음개미로 나눠서 answer
