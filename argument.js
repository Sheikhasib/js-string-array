function addNumbers(num1, num2){
    // console.log(arguments[3]);
    let result = 0;
    for(const num of arguments){
       result = result + num;
    }  
    // arguments.push(34); 
    // const result = num1 + num2;
    return result;
}
const sum = addNumbers(22, 56, 567, 428);
// console.log(sum);

function getFullName(firstName, secondName){
    let fullName = '';
    for(const part of arguments){
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('Mike', 'Songket', 'Bin', 'Hanif', 'Songket');
console.log(name);