const coor = function (isbn) {
    let num = "";
    for (let i = 0; i <= 11; i++) {
        num += i % 2 === 0 ? `1*${isbn[i]}+` : `3*${isbn[i]}+`;
    }
    num = num.substring(0, num.length - 1);
    return 10-(eval(num)%10);
}

console.log(coor(process.argv[2]));