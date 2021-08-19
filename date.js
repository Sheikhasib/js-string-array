const myFavDate = new Date('1971-12-16');
// console.log(myFavDate);
const newDate = new Date(1971, 3, 26, 12, 40, 46, 55);
// console.log(newDate);

if(myFavDate.getTime() < newDate.getTime()){
    console.log('fav is earlier');
}