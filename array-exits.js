function megaFriends(friends){
    if(Array.isArray(friends) == false){
        return 'Provide an Array.'
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
}
const friends = ['rahim', 'karim', 'kuddus' ];
const bigBuddy = megaFriends(1234);
// console.log(bigBuddy);

if(friends.indexOf('liton') != -1){
    // console.log('rahim exists');
}
else{
    console.log('liton does not exists ');
}

if(friends.includes('karim') != -1){
    console.log('karim exists');
}