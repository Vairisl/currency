let coordalt = function(x, y) {
    if (x == 8) return 9
    if (x + y == 7 || x + y == 8) return 2
    if (x <= 2 && y <= 2) return 5
    if (x + y < 6) return 1
    if (x > 2 && x < 7 && y > 2 && y < 5) return 6
    if (x == y || x + y == 10 && y > 5 ) return 8
    if (x + y > 10 && x < y) return 7
    return 0
}


console.log([coordalt(1, 1), coordalt(2, 1), coordalt(3, 1), coordalt(4, 1), coordalt(5, 1), coordalt(6, 1), coordalt(7, 1), coordalt(8, 1)])
console.log([coordalt(1, 2), coordalt(2, 2), coordalt(3, 2), coordalt(4, 2), coordalt(5, 2), coordalt(6, 2), coordalt(7, 2), coordalt(8, 2)])
console.log([coordalt(1, 3), coordalt(2, 3), coordalt(3, 3), coordalt(4, 3), coordalt(5, 3), coordalt(6, 3), coordalt(7, 3), coordalt(8, 3)])
console.log([coordalt(1, 4), coordalt(2, 4), coordalt(3, 4), coordalt(4, 4), coordalt(5, 4), coordalt(6, 4), coordalt(7, 4), coordalt(8, 4)])
console.log([coordalt(1, 5), coordalt(2, 5), coordalt(3, 5), coordalt(4, 5), coordalt(5, 5), coordalt(6, 5), coordalt(7, 5), coordalt(8, 5)])
console.log([coordalt(1, 6), coordalt(2, 6), coordalt(3, 6), coordalt(4, 6), coordalt(5, 6), coordalt(6, 6), coordalt(7, 6), coordalt(8, 6)])
console.log([coordalt(1, 7), coordalt(2, 7), coordalt(3, 7), coordalt(4, 7), coordalt(5, 7), coordalt(6, 7), coordalt(7, 7), coordalt(8, 7)])
console.log([coordalt(1, 8), coordalt(2, 8), coordalt(3, 8), coordalt(4, 8), coordalt(5, 8), coordalt(6, 8), coordalt(7, 8), coordalt(8, 8)])
