let n = 5;
let n1 = 1;
//let n1 = 10;
//let n1= 5;

function guess(num){
	if (num == n){
		alert("Yep, those guys know each other");
	} else if (num < n){
		alert("Sorry buddy, grow up or something");
	} else{
		alert("Woah, we're picking grandpa numbers now?");
	}
}

guess(n1);