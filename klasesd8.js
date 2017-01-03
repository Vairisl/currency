let getCars = function() {
  let makeCar = function(mark, model, year, horsePower, capacity, mileage) {
    return {mark, model, year, horsePower, capacity, mileage}
  }

  return [
    makeCar("Audi", "90", 1985, 144, 2.5, 270585),
    makeCar("Fiat", "Stilo", 2002, 174, 2.4, 250000),
    makeCar("BMW", "E95", 1993, 95, 40, 3000000000),
    makeCar("VW", "T2", 1973, 60, 1.7, 250000),
    makeCar("VW", "T2", 1973, 50, 1.6, 100000),
  ]
}

let lowMileage = function () {
    let cars = getCars()
    let low = cars[0]

    for (i = 0; i < cars.length; i++) {
        if (low.mileage > cars[i].mileage) {
            low = cars[i]
        }
    }
    return low.mileage
}

let topMilage = function() {
    let cars = getCars()
    let high = cars[0]

    for (i = 0; i < cars.length; i++) {
        if (high.mileage < cars[i].mileage) {
            high = cars[i]
        }
    }
    return high.mileage
}

let oldestCar = function() {
    let cars = getCars()
    let oldest = cars[0]

    for (i = 0; i < cars.length; i++) {
        if (oldest.year > cars[i].year) {
            oldest = cars[i]
        }
    }
    return "Oldest car" + ": " + oldest.mark + " " + oldest.model + " " + oldest.year
}

let newestCar = function() {
    let cars = getCars()
    let newest = cars[0]

    for (i = 0; i < cars.length; i++) {
        if (newest.year < cars[i].year) {
            newest = cars[i]
        }
    }
    return "Newest car" + ": " + newest.mark + " " + newest.model + " " + newest.year
}

let maxAverage = function() {
    let cars = getCars()
    let year = new Date().getFullYear()


    for (i = 0; i < cars.length; i++) {
        carOld = year - cars[i].year
        averageMileage = cars[i].mileage / carOld

        if (typeof maxMileage == 'undefined') {
            maxMileage = averageMileage
        } else {
            if (averageMileage > maxMileage) {
                maxMileage = averageMileage
                
            }
        }
    }
    return Math.round(maxMileage).toFixed(2)
}

let minAverage = function() {
    let cars = getCars()
    let year = new Date().getFullYear()
    let carOld
    let averageMileage


    for (i = 0; i < cars.length; i++) {
        carOld = year - cars[i].year
        averageMileage = cars[i].mileage / carOld

        if (typeof minMileage == 'undefined') {
            minMileage = averageMileage
        } else {
            if (averageMileage < minMileage) {
                minMileage = averageMileage
            }
        }
    }
    return Math.round(minMileage).toFixed(2)
}

let minVSmax = function() {
    let min = minAverage()
    let max = maxAverage()

    return max - min
}

let lowVStop = function() {
    let low = lowMileage()
    let top = topMilage()

    return top - low 
}

console.log(lowMileage())
console.log(topMilage())
console.log(oldestCar())
console.log(newestCar())
console.log(maxAverage())
console.log(minAverage())
console.log(minVSmax())
