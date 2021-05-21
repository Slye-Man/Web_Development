// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var user = {
	username: "Slye",
	password: "password"
}

// 2. Create an array which contains the object you have made above and name the arry "database"
var database = [
	{
		username: "Slye",
		password: "password"
	},
	{
		username: "John Smith",
		password: "PaasWord"
	},
	{
		username: "Joe Mary",
		password: "psW0rd"
	},
	{
		username: "Ann Belle",
		password: "secret"
	},
	{
		username: "Wall Front",
		password: "supersecret"
	},
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var userNamePrompt = prompt("What is your username?: ")
var passwordPrompt = prompt("What is your password?: ")

function isUserValid(username, password) {
	for (let x = 0; x < database.length; x++) {
		if (database[x].username === username && database[x].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(userN, passW) {
    if (isUserValid(userN, passW)) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password!")
    }
}

signIn(userNamePrompt, passwordPrompt)