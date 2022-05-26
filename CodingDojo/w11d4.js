//clock angles!!!!

//given a number of minutes past midnight, determine
//the angle between the hour and minute hands at that point in time
//keep in mind that on an analog clock, the hour hand is
//not perfectly aligned with the number hour
//e.g. at 4:45, the hour hand is 3/4 the way between 4 and 5
//you can assume the minute hand moves perfectly from one minute
//to the next.
//BONUS: the parameter accepts the number of SECONDS after midnight

const clockAngles = ( minutes ) => {
  
	let hour = Math.floor(minutes / 60);
  let minute = Math.floor( minutes % 60 );
  
	console.log('hour', hour, 'minute', minute);

	let hourAngle = hour * 30 + minute * 0.5;
	let minuteAngle = minute * 6;

	console.log('hourAngle', hourAngle, 'minuteAngle', minuteAngle);

	// Get the angle of the hour hand counting the minutes passed
	let angle = Math.abs(hourAngle - minuteAngle);

	return `${angle} degrees`;
};

console.log(clockAngles(360));
console.log(clockAngles(180));
console.log(clockAngles(210));
console.log(clockAngles(588));
console.log(clockAngles(980));
console.log(clockAngles(361));
