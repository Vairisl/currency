
let funkcija1 = function (x) {
    let masivs = []

    for (let i = 0; i < x; i++) {
         masivs.push(i)
    }

    return masivs
}

let funkcija2 = function (x) {
    let masivs = []

    for (let i = 0; i < x; i++) {
        masivs.push(i*2)
    }

    return masivs
}



console.log(funkcija1(5))
console.log(funkcija2(5))
console.log(funkcija3(100))
