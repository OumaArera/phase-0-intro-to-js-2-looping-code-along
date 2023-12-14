// Code your solutions in this file

function writeCards(arrayOfStringNames, event){
    let arrayName = [];
    for (let i = 0; i < arrayOfStringNames.length; i++){
        let message = `Thank you, ${arrayOfStringNames[i]}, for the wonderful ${event} gift!`;
        arrayName.push(message);

    }
    return arrayName;
}

function countDown(positiveInteger){
    let i = positiveInteger; 
    while (i>=0){
        console.log(i--);
    }

}