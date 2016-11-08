let exchangeRates = {
    eur: 1,
    lvl: 0.69,
    usd: 1.11
}

let usdToLvl = usd => {
    let eur = usd / exchangeRates.usd
    let lvl = eur * exchangeRates.lvl
    return lvl
}

let lvlToUsd = lvl => {
    let eur = lvl / exchangeRates.lvl
    let usd = eur * exchangeRates.usd
    return usd
}

function converter(nauda, valueFrom, valueTo) {
    valueFrom = exchangeRates[valueFrom]
    valueTo = exchangeRates[valueTo]
    atbilde = (nauda / valueFrom) * valueTo
    return atbilde
}

//let lvl = usdToLvl(10)
//let usd = lvlToUsd(10)

let summa = converter(10, "lvl", "eur")