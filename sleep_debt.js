//Sleep Debt Calculator.
/* This project calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal. */

// A functn to get sleep hours for each night of the week.
const getSleepHours = (day) => {
  if (day === 'Monday') {
    return 8;
  }else if(day === 'Tuesday'){
    return 5;
  }else if(day === 'Wednesday') {
    return 6;
  }else if (day === 'Thursday') {
    return 4;
  }else if (day === 'Friday') {
    return 6;
  }else if (day === 'Saturday') {
    return 7;
  }else if (day === 'Sunday') {
    return 8;
  }

};

//A functn to Get the total sleep hours that you actually slept
const getActualSleepHours = () => {
 const sum = getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
 return sum;
};

//A functn to Get the ideal sleep hours that you prefer
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7; //Total hours prefer per week
};
 //A functn to get the actual sleep hours and the ideal sleep hours
 //It's time to calculate sleep debt

 const calculateSleepDebt = () => {
   const actualSleepHours = getActualSleepHours();
   const idealSleepHours = getIdealSleepHours();
   if(actualSleepHours === idealSleepHours){
     console.log(`You got ${idealSleepHours - actualSleepHours} hours;  the perfect amount of sleep`);
   }else if(actualSleepHours  > idealSleepHours){
     console.log(`You got ${idealSleepHours - actualSleepHours} hours more sleep than needed.`);
   }else if(actualSleepHours < idealSleepHours){
     console.log(`You got ${idealSleepHours - actualSleepHours} hours less than you needed. You should get some rest.`);
   }
 };

 console.log(calculateSleepDebt());
