// let userName = 'haneul';

// function showMessage() {
// 	userName = 'gally';// 외부변수 수정

// 	let message = 'hello' + userName;
// 	alert(message);
// }

// alert(userName);

// showMessage();
// alert(userName);


// let userName = 'haneul';

// function showMessage() {
// 	let userName = 'gally';

// 	let message = 'hello' + userName;
// 	alert(message);
// }

// alert(userName);

// showMessage();
// alert(userName);


// function showMessage(from, text) {
// 	alert(from + ':' + text);
// }
// showMessage('ann', 'hello');

function showMessage(from, text) {
	from = '*' + from + '*';
	console.log(from + ':' + text);
}

let from = 'ann';
showMessage(from, "hello");

console.log(from);

let user = {
	name: 'haneul',
	age: '25',
};

// let key = prompt('what do you want to know?', 'name');

// alert(user[key]);

// user.isAdmin = true;
// delete user.age;
// console.log(user.isAdmin);
// console.log(user);


// let user = {};

// user['likes birds'] = true;

// console.log(user['likes birds']);
// delete user['likes birds']

// console.log(user['likes birds'])

// let key = 'likes birds';

// user[key] = true;
// console.log(user[key]);

// let fruit = prompt('which fruit would you like to buy?', 'apple');
// let bag = {
// 	[fruit]: 5, // 변수 fruit 에 'apple'
// };
// console.log(bag.apple);

let a = {};
let b = {};

console.log(a == b); //false



Object.prototype.objCustom = "h1";
Array.prototype.arrCustom = "h2";
let iterable = [3, 5, 7];
iterable.foo = "hello";

for (let key in iterable) {
	console.log(key);
}

const numbers = { fname: "John", lname: "Doe", age: 25 };

for (let x in numbers) {
	console.log(numbers[x]);
}

const objCustome1 = {
	lion: "사자",
	tiger: "호랑이",
	rabbit: "토끼",
}

const arrCustom1 = [5, 6, 7]

// for (const prop in objCustome1) {
// 	console.log(`${prop} : ${objCustome1[prop]}`);
// }

for (const prop in arrCustom1) {
	console.log(prop, arrCustom1[prop]);
}

console.log('~~~~~~~~~~~~~~~~~')

const arrCustom2 = [8, 9, 10];
for (const prop of arrCustom2) {
	console.log(prop);
}


console.log('~~~~~~~~~~~~~~~~~')

// let range = {
// 	from: 1,
// 	to: 5
// };

// range[Symbol.iterator] = function () {
// 	return {
// 		current: this.from,
// 		last: this.to,
// 		next() {
// 			if (this.current <= this.last) {
// 				return { done: false, value: this.current++ };
// 			} else {
// 				return { done: true };
// 			}
// 		}
// 	}
// }

// for (let num of range) {
// 	console.log(num);
// }


let range = {
	from: 1,
	to: 5,
	[Symbol.iterator]() {
		this.current = this.from;
		return this;
	},
	next() {
		if (this.current <= this.to) {
			return { done: false, value: this.current++ };
		} else {
			return { done: true };
		}
	}
}

for (let num of range) {
	console.log(num);
}


console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

// function checkAge(age) {
// 	if (age >= 18) {
// 		return true;
// 	} else {
// 		return confirm('confirm');
// 	}
// }

// let age = prompt('your age?', 18);

// if (checkAge(age)) {
// 	console.log('pass')
// } else {
// 	console.log('out')
// }

// function showMovie(age) {
// 	if (!checkAge(age)) {
// 		return;
// 	} else {
// 		alert('hi');
// 	}
// }

// if (showMovie(age)) {
// 	console.log('hi')
// } else {
// 	console.log('hello')
// }

function showMessage1(from, text = "no text given") {
	console.log(from + ":" + text);
}

showMessage1('haneul');


function showMessage2(from, text = anotherFunction()) {
	console.log(from + ":" + text);
}
showMessage2('haneul1');

function anotherFunction() {
	return 'hahahaha'
}

function showMessage3(text) {
	text = text || 'no text given';
	console.log(text)
}
showMessage3('heyhey');


if (1 || 0) {
	console.log('truthy');
}

console.log('~~~~~~~~~~~~~~~~~~~~~')
// let hour = 9;

// if (hour < 10 || hour > 18) {
// 	console.log('wait')
// }

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
	console.log('wait1')
}

//첫번째 truthy를 찾는 or 연산자

console.log(null || 0 || 1);
console.log(null || undefined || 0);

true || console.log("ho") // 
false || console.log("hi")


//첫번째 falsy를 찾는 and 연산자
console.log(1 && 0);
console.log(1 && 5);

console.log(null && 5);
console.log(0 && 'whatever');

console.log(1 && 2 && null && 3);

console.log(1 && 2 && 3);

let x = 1;
(x > 0) && console.log('0보다 큽니다')





