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

    // request data from a php file every five seconds
    /*
    Tick.data.poll(
        'data.php',
        function(response) {
            // assuming the response is a plain number
            // we turn it into an int and feed it directly to tick
            tick.value = parseInt(response, 10);
        },
        5000
    );
    */

}