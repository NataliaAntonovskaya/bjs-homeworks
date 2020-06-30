function getResult(a,b,c){
    'use strict';
    let D = b ** 2 - 4 * a * c;
    let x = [];
    let x1, x2;
    if (D > 0) {
        x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
        x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
        x.push(x1, x2);
    } else if (D === 0) {
        x1 = -b / (2 * a);
        x.push(x1);
    }
        
    return x;
}

function getAverageMark(marks){
    let averageMark; 
    let numberOfMarks = marks.length;    
    if (numberOfMarks === 0) {
        averageMark = 0;
    } else if (numberOfMarks > 5) {
        marks = marks.slice(0, 5);        
    }
    if (numberOfMarks > 0) {
        let sumOfMarks = 0;
        for (mark of marks) {
            sumOfMarks += mark;
        }
        numberOfMarks = marks.length;
        averageMark = sumOfMarks / numberOfMarks;
    }        
    
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    const year = new Date().getFullYear();
    let yearOfBirth = dateOfBirthday.getFullYear();
    let age = year - yearOfBirth;
    let result;
    if (age >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    return result;
}