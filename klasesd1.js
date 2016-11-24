let coords = function(x, y) {
    if (x == 1 && y == 1) {
        atbilde = 4
    } else if (x == 2 && y == 1) {
        atbilde = 4
    } else if (x == 3 && y == 1) {
        atbilde = 4
    } else if (x == 4 && y == 1) {
        atbilde = 0
    } else if (x == 5 && y == 1) {
        atbilde = 2
    } else if (x == 1 && y == 2) {
        atbilde = 3
    } else if (x == 2 && y == 2) {
        atbilde = 4
    } else if (x == 3 && y == 2) {
        atbilde = 0
    } else if (x == 4 && y == 2) {
        atbilde = 2
    } else if (x == 5 && y == 2) {
        atbilde = 0
    } else if (x == 1 && y == 3) {
        atbilde = 3
    } else if (x == 2 && y == 3) {
        atbilde = 3
    } else if (x == 3 && y == 3) {
        atbilde = 2
    } else if (x == 4 && y == 3) {
        atbilde = 0
    } else if (x == 5 && y == 3) {
        atbilde = 1
    } else if (x == 1 && y == 4) {
        atbilde = 3
    } else if (x == 2 && y == 4) {
        atbilde = 2
    } else if (x == 3 && y == 4) {
        atbilde = 3
    } else if (x == 4 && y == 4) {
        atbilde = 1
    } else if (x == 5 && y == 4) {
        atbilde = 1
    } else if (x == 1 && y == 5) {
        atbilde = 2
    } else if (x == 2 && y == 5) {
        atbilde = 3
    } else if (x == 3 && y == 5) {
        atbilde = 1
    } else if (x == 4 && y == 5) {
        atbilde = 1
    } else if (x == 5 && y == 5) {
        atbilde = 1
    }
    return atbilde
}

let answer = coords(4, 1)
console.log([coords(1, 1), coords(2, 1), coords(3, 1), coords(4, 1), coords(5, 1)])
console.log([coords(1, 2), coords(2, 2), coords(3, 2), coords(4, 2), coords(5, 2)])
console.log([coords(1, 3), coords(2, 3), coords(3, 3), coords(4, 3), coords(5, 3)])
console.log([coords(1, 4), coords(2, 4), coords(3, 4), coords(4, 4), coords(5, 4)])
console.log([coords(1, 5), coords(2, 5), coords(3, 5), coords(4, 5), coords(5, 5)])

