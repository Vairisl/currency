let coordalt = function(x, y) {
    if (x + y == 6) return 2
    if (x + y >= 8) return 1
    if (y > x) return 3
    if (x + y <= 4) return 4

    return 0
}


console.log([coordalt(1, 1), coordalt(2, 1), coordalt(3, 1), coordalt(4, 1), coordalt(5, 1)])
console.log([coordalt(1, 2), coordalt(2, 2), coordalt(3, 2), coordalt(4, 2), coordalt(5, 2)])
console.log([coordalt(1, 3), coordalt(2, 3), coordalt(3, 3), coordalt(4, 3), coordalt(5, 3)])
console.log([coordalt(1, 4), coordalt(2, 4), coordalt(3, 4), coordalt(4, 4), coordalt(5, 4)])
console.log([coordalt(1, 5), coordalt(2, 5), coordalt(3, 5), coordalt(4, 5), coordalt(5, 5)])

let atbilde = coordalt(5, 1)