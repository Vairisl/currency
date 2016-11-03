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

//vai

let usdToLvl = usd => {
    usd / exchangeRates.usd * exchangeRates.lvl
}

let lvl = usdToLvl(10)
