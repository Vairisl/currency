let skaitli = function(x) {
    if (x < 3) return 1
    let array = [1,1]

    for (let i = 2; i < x - 1; i++) {
        array = [array[1], array[0] + array[1]]
        // array[array.length] = array[i - 1] + array[i - 2]
    }
    // return array[array.length - 1]
    return array[0] + array[1];
}

console.log([skaitli(1), skaitli(2),skaitli(3),skaitli(4),skaitli(5),skaitli(6),skaitli(7),skaitli(8),skaitli(9),skaitli(10)])