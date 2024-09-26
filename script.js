const dob = document.getElementById('dob');
const result = document.getElementById('result');

function calculate() {
    daysLeft();
    console.log("working");
}

function daysLeft() {
    const currentDate = new Date();
    // console.log(currentDate);
    
    const birthday = new Date(dob.value);
    // console.log(birthday);
    

    if (dob.value === "") {
        return error();
    }

    let age = Math.floor((currentDate - birthday) / (1000 * 60* 60 * 24 * 365.25));

    result.textContent =  `You are ${age} year old`;
}

function error() {
    alert("Please enter some date");
}

