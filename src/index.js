module.exports = function reverse (n) {
    n = n < 0 ?  n * -1 : n;

    let reversedNumber =  String(n).split('')
    reversedNumber = reversedNumber.reverse();
    reversedNumber = "".concat(...reversedNumber)
    return reversedNumber
}
