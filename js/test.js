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

let fruit = prompt('which fruit would you like to buy?', 'apple');
let bag = {
	[fruit]: 5, // 변수 fruit 에 'apple'
};
console.log(bag.apple);

