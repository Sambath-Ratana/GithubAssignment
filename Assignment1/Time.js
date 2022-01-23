function getCurrentDay() {
    const dateId = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const d = new Date()
    let day = d.getDay();
    console.log(`The Current Day is: ${dateId[day]}`);

}

function getCurrentTime() {
    let d = new Date();
    let hour = d.getHours();
    let AMPM = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = (hour != 0) ? hour : 12;
    console.log(`Current Time is: ${hour+AMPM}`);

}

getCurrentDay();
getCurrentTime();