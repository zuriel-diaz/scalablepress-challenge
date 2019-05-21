// Set the deadline in the following format: MMM DD, YYYY HH:MM:SS
const DEADLINE 	= new Date("May 22, 2019 23:27:47").getTime();
const DAY 		= "day";
const HOUR 		= "hour";
const MINUTE 	= "minute";
const SECOND 	= "second";
const SECONDS 	= 1;

/*
 * Calculate and retrieve the supported date type.
 * @params:
 * 	-String type: Choose one of the constants declared above to set the date type.
 * 	-Time distance: The difference between our deadline and current time.
 * @returns:
 * 	-Number.	  
 *
 */
function getTime(type, distance){
	switch(type){
		case DAY:
			return Math.floor(distance / (1000 * 60 * 60 * 24));
			break;
		case HOUR:
			return Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			break;
		case MINUTE:
			return Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			break;
		case SECOND:
			return Math.floor((distance % (1000 * 60)) / 1000);
			break;
		default:
			return null;
			break;
	}
}

/*
 * Every 1s we're refreshing the countdown.
 * Instead of use 1s we need to specify the miliseconds.
 *
 */
var displayCountdownTimer = setInterval(function (){
	
	// Retrieve the current date time.
	var now = new Date().getTime();

	// Calculate the difference between deadline time and current time.
	var distance = DEADLINE - now;

	// Display time. We're using the selectors to display time values.
	document.querySelector(".day-value").textContent = getTime(DAY,distance);
	document.querySelector(".hour-value").textContent = getTime(HOUR,distance);
	document.querySelector(".minute-value").textContent = getTime(MINUTE,distance);
	document.querySelector(".second-value").textContent = getTime(SECOND,distance);
},(SECONDS * 1000));