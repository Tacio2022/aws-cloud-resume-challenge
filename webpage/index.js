//JavaScript Code

const counter = document.querySelector(".counter-number");
async function Counterupdate() {
	let response = await fetch ("https://4in644ouz5byek7wvpsk56z4g40ncurx.lambda-url.us-east-1.on.aws/");
	let data = await response.json();
	counter.innerHTML =  ` Views: ${data}`;
}

Counterupdate();


