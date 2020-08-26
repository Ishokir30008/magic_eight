/*A program that will register runners for a  race and give them instructions on race day.*/

//Race numbers are assigned randomly.
let raceNumber = Math.floor(Math.random() * 1000);

//A variable that shows that a runner registered early.
let early = false;

//A variable for the runner's age.
let runnerAge = 21;

/*A control flow that check if the runner is an adult and registered early*/

if(runnerAge > 18 && early === true){
  raceNumber = raceNumber + 1000;
  console.log(`Your race number is ${raceNumber}`);
  console.log('You will race at 9:30am.');
}else if(runnerAge > 18 && early === false){
  raceNumber;
  console.log(`Your race number is ${raceNumber}`);
  console.log('You will race at 11:00am');
}else if(runnerAge < 18){
  console.log(`Your race number is ${raceNumber}`);
  console.log('You will race at 12:30pm');
}else{
  console.log('See the reqistration desk');