function showLoginPrompt() {
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");

    if (username === "admin" && password === "admin") {
        window.location.href = "admin.html"; // lisada admini home page fail
    } else {
        window.location.href = "homepage.html"; // lisada tavakasutaja home page fail
    }
}

function handleTickInit(tick) {

    // simulate value updates for demo purposes
    Tick.helper.interval(function(){
        tick.value += 1 + Math.ceil(Math.random() * 2);
    }, 3000);
}