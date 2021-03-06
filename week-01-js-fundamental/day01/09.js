const getRandomPassword = (s) => {
	if (!isNaN(s)) {
		return 'Value must be character';
	} else if (s.length < 6) {
		return 'Length must more than 6';
	} else {
		let out = '';
		for (let i = 0; i < 8; i++) {
			if (i < 4) {
				out += s.charAt(Math.random() * 6);
			} else {
				out += parseInt(Math.random() * 10);
			}
		}
		return out;
	}
};

console.log(getRandomPassword('123465')); //Value must be character
console.log(getRandomPassword(3422)); //Value must be character
console.log(getRandomPassword('code')); //Length must more than 6
console.log(getRandomPassword('codeid')); //doed3726
