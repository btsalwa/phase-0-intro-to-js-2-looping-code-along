const msgs = [];
function writeCards(guests,bevent){
    for ( let i = 0; i < guests.length; i++){
        const msg = `Thank you, ${guests[i]}, for the wonderful ${bevent} gift!`;
        msgs.push(msg);

        if(i == guests.length-1){
            console.log(msgs);
            return msgs;
        }
    }
}


function countDown(){
    let i = 10;
    while ( i > -1){
        console.log(i);
        i--;
    }
    return i
}

countDown(); 