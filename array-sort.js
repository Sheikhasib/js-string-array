const numbers = [3,2,6,4,7,8,9,6,4];
const sortNumbers = numbers.sort();
// console.log(sortNumbers);

const friends = ['jasim', 'dipjol', 'kader', 'manna', 'liton', 'abbas'];
const sortedFriends = friends.sort();
// console.log(sortedFriends);
// const reversedFriends = friends.reverse();
// console.log(reversedFriends);
const sortedReversedFriends = friends.sort().reverse();
console.log(sortedReversedFriends);

// number sorting fun
const bigNumbers = [33, 55,58, 98,100,542,56,7,3,9];
const sortedBigNumbers = bigNumbers.sort(function(a,b){
    return a-b;
});
console.log(sortedBigNumbers);