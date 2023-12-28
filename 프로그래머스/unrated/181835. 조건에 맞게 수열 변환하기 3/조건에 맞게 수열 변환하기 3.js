function solution(arr, k) {
    if (k % 2 === 1) {

        return arr.map(element => element * k);
    } else {

        return arr.map(element => element + k);
    }
}