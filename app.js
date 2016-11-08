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

let lvl = usdToLvl(10)
let usd = lvlToUsd(10)