/*
Reverse Integer.  Practice problem #7 on leetcode.com
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
*/

var reverse = function(x) {
	let numArray = 0
	if(x < 0){numArray = Number(x.toString().replace('-', '').split('').reverse().join('')) * (-1)}
	else{numArray = Number(x.toString().replace('-', '').split('').reverse().join(''))}

	if(numArray >= 2**31 || numArray <= (2**31) * (-1)){return 0} //numArray bigger than 32-bit 

	else{return numArray}
};

reverse(12) //for debug - number to reverse
