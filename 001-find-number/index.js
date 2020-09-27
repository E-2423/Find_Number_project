let guess_count = 0;


const random_number = Math.floor(Math.random() * 100 + 1);
console.log(random_number);

document.querySelector("#check_it").addEventListener("click", checkNumber);




function checkNumber() {
    guess_count++;

    let userInputElement = document.querySelector("#nr_game");

    document.querySelector("#count_it").innerText = `Guess count is: ${guess_count}`;

    if (userInputElement.value == random_number) {
        alert("You are the winner!");

    } else {

        alert("You are wrong!");
    }

}