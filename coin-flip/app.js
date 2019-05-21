const randomNumbers = new Array(
	0.8207125988,
	0.2858442162
	);

var position = 0;

function flip(){
	return Math.floor(Math.random() * 1000009);
}

function randomNumber(number){

	if(number <= 0){
		throw new Error('Number must be greater than 0.');
	}

	if(number > 999999){
		throw new Error('Number must be less than 1,000,000.');
	}

	return Math.floor(randomNumbers[position]*number);
}

var currentNumber = flip();
console.log('Random number from flip() method->' + currentNumber + '|random number from randomNumber() method->' + randomNumber( currentNumber ));