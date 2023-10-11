function solution(money) {
    
    const coffeePrice = 5500

    const coffeeCount = Math.floor(money / coffeePrice)
    
    const chargeMoney = money % coffeePrice
    
    let answer = [coffeeCount,chargeMoney]
    
    
    return answer;
}