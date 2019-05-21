const randomNumbers = new Array(
	0.8207125988,
	0.2858442162
	);

var position = 0;

exports.randomNumber = function(number){
	if(number <= 0){
		throw new Error('Number must be greater than 0.');
	}

	if(number > 999999){
		throw new Error('Number must be less than 1,000,000.');
	}

	return Math.floor(randomNumbers[position]*number);
}

exports.flip = function(){
	return Math.floor(Math.random() * 1000009);
}