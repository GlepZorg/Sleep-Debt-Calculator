// Method will return the total amount of sleep the user registered during the week.
const getSleepHours = day => {

    if(day === 'monday'){
        return 3;
    } else if(day === 'tuesday'){
        return 8;
    } else if(day === 'wednesday'){
        return 5;
    } else if(day === 'thursday'){
        return 6;
    } else if(day === 'friday'){
        return 11;
    } else if(day === 'saturday'){
        return 8;
    } else if(day === 'sunday'){
        return 14;
    }
    else{
        return -1;
    }
}

// Method will call getSleepHours method for each day of the week and return the total amount.
const getActualSleepHours = () => 
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') +
getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

// Method will ask user for their ideal amount of sleep each night and multiply the number given by 7 for a whole weeks for of sleep.
const getIdealSleepHours = idealHours => {
    return idealHours * 7;
}

// Method will calculate and return if user is getting enough sleep.
const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(10);

    if(actualSleepHours === idealSleepHours){
        console.log('The user got the perfect amount of sleep!');
        console.log(`The user ended up with exactly ${idealSleepHours} hours of sleep this week.`);
    } else if(actualSleepHours > idealSleepHours){
        console.log('The user got more sleep that needed!');
        console.log(`The user ended up with ${actualSleepHours - idealSleepHours} hours more of sleep this week.`);
    } else if(actualSleepHours < idealSleepHours){
        console.log('The user should get some rest!');
        console.log(`The user ended up with ${idealSleepHours - actualSleepHours} hours less of sleep this week.`);
    } else{
        console.log('Error!');
    }
}
// Method call to get the program running.
calculateSleepDebt();