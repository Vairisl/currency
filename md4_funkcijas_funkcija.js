let students = [{
                name:"Vairis",
                mark:[2,5,9,10,1,4],
                average: function() { return this.mark.reduce((a, b) => a + b, 0)/this.mark.length}
               },
               {
                name:"Andris",
                mark:[2,2,3,1,1,5],
                average: function() { return this.mark.reduce((a, b) => a + b, 0)/this.mark.length}
               },
               {
                name:"Ricards",
                mark:[2,5,9,1,1,4],
                average: function() { return this.mark.reduce((a, b) => a + b, 0)/this.mark.length}
               },
               {
                name:"Toms",
                mark:[2,0,9,10,1,4],
                average: function() { return this.mark.reduce((a, b) => a + b, 0)/this.mark.length}
               },
               {
                name:"Justine",
                mark:[7,5,9,8,1,4],
                average: function() { return this.mark.reduce((a, b) => a + b, 0)/this.mark.length}
               }];

let smartestStudents1 = function (students, minGrade) {
    let names = []

    for (let i = 0; i < students.length; i++){
        if (students[i].average() >= minGrade){
            names.push(students[i].name)
        }
    }
    return names
}

let smartestStudents2 = function (students, minGrade) {
    let names = []
    let i = 0

    while (i < students.length) {
        if (students[i].average() >= minGrade) {
            names.push(students[i].name)
        }
        i++;
    }

    return names
}

let smartestStudents3 = function (students, minGrade) {
    let names = []
    let i = 0

    do {
        if (students[i].average() >= minGrade) {
            names.push(students[i].name)
        }
        i++
    } while (i < students.length);
    return names
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
let smartass = function (student, minGrade) {
    return student.average() >= minGrade
}

// let smartass2 = function(minGrade) {
//     return function(student) {
//         return student.average() >= minGrade
//     }
// }

// let smartass3 = minGrade => student => student.average() > minGrade

let smartestStudents4 = function (students, minGrade) {
    let filtered = students.filter(function(student){
        return smartass(student, minGrade)
    }).map(function(student){
        return student.name
    })

    return names

    // return students.filter(student => student.average() > minGrade)
    //     .map(student => student.name)
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////





let answer1 = smartestStudents1(students, 4)
let answer2 = smartestStudents2(students, 4)
let answer3 = smartestStudents3(students, 4)
let answer4 = smartestStudents4(students, 4)

console.log(answer1)
console.log(answer2)
console.log(answer3)
console.log(answer4)