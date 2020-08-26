//Magic Eight to tell someone's fortune

let userName = '';
userName ? console.log(`Hello ${userName}`) : console.log('Hello!');

let userQuestion = 'Will I be lucky today?';
console.log(`You asked ${userQuestion}`);
console.log('And this is what the oracle says:')

//Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

/*Create a control flow that takes in the randomNumber; and then assigns eightBall to a reply that a Magic Eight Ball would return.*/

if(randomNumber === 0){
  console.log('It is certain');
}else if(randomNumber === 1){
  console.log('It is decidedly so');
}else if(randomNumber === 2){
  console.log('Hazy try again');
}else if(randomNumber === 3){
  console.log('Cannot predict now');
}else if(randomNumber === 4){
  console.log('Do not count on it');
  }else if(randomNumber === 5){
    console.log('My sources say no');
  }else if(randomNumber === 6){
    console.log('Outlook not so good');
  }else if(randomNumber === 7){
    console.log('signs point to yes');
  }else{
    console.log('Pls try again.');
  }