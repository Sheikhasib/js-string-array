const anthem = 'Amar Sonar Bangla Ami Tomai Valobasi';
const words = anthem.split('');
const withoutA = anthem.split('a');
// console.log(withoutA);

// slice
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// substr
const anotherPart = anthem.substr(11, 8);
// console.log(anotherPart);

// substring
const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

// concat
const first = 'tomader';
const second = 'city';
// const fullString = first + second;
const fullString = first.concat(second).concat('gollai jachce');
// console.log(fullString);

// 
const words2 = ['alam', 'sobitha', 'akkas', 'dalim'];
const allJoined = words2.join('www');
console.log(allJoined);