function solution(my_string) {
    let reverseStr = my_string.split('');

    reverseStr.reverse()

    return reverseStr.join('');
}