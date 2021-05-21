// //Prompt user for name and age



function checkDriverAge() {
    var name = prompt("Please enter name: ")
    alert(`Good day ${name} :)`);
    var age = Number(prompt("Please enter age"))

    if (age === 18) {
        alert("Congratulations on your first time driving :) Enjoy");
    } else if (age < 18) {
        alert("Oops, sorry. You're too young to drive. Powering off");
    } else {
        alert("Hey hey, welcome back. Enjoy the ride!");
    }
}

//2. Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression.
var checkDriverAge2 = function() {
	var age = Number(prompt("What is your age?"));
	if (age < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (age > 18 ) {
		alert("Powering On. Enjoy the ride!");
	} else if (age === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!" 
function checkDriverAge(age) {
	if (age < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (age > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (age === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}