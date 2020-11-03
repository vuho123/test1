function getNumber() {
    let correctNumber = Math.floor(Math.random() * 10) + 1

    let number = document.getElementById("placeHolder").value


    if (1 <= number <= 10) {
        if (number == correctNumber) {
            document.getElementById("text2").innerHTML = "YOU ARE CORRECT"
        }
        else if (number != correctNumber) {
            document.getElementById("text3").innerHTML = `WRONG! Correct Number is ${correctNumber}`
        }

    }
    else {
        alert("Nhập Lại")
    }
}
function myFunction() {
    document.getElementById("myBtn").disabled = true;
}



document.getElementById("myBtn").addEventListener("click", countClicks)
let Count = 1
function countClicks() {
    let limit = 3;
    if (Count >= limit) {

        document.getElementById("text").innerHTML = `You can only click this button ${limit} times.`

        myFunction()
    }
    else {
        Count++;



    }
}



