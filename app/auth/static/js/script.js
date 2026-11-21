const pass = document.querySelector(".pass1")
const confirmPass = document.querySelector(".pass2")
const textIfEqual = document.querySelector(".isEqual")
const textIfStrong = document.querySelector(".isStrong")

pass.addEventListener("input", strongMeter)
confirmPass.addEventListener("input", checkingEquality)

function strongMeter() {
    const specialChar = ['!', '@', '#', '$', '%', '*', '-', '_', '+', '=', '?', '~']
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let counter = 0
    usersPass = pass.value
        
    if (usersPass.length >= 8 && usersPass.length <= 24) {
        counter++
    }

    for (const char of usersPass) {
        if (specialChar.includes(char)) {
            counter++
            break
        }
    }

    for (const char of usersPass) {
        if (upperCase.includes(char)) {
            counter++
            break
        }
    }

    for (const char of usersPass) {
        if (lowerCase.includes(char)) {
            counter++
            break
        }
    }

    for (const char of usersPass) {
        if (numbers.includes(char)) {
            counter++
            break
        }
    }
    
    if (counter == 5) {
        textIfStrong.textContent = "Strong password"
        textIfStrong.style.color = "green"
    } else {
        textIfStrong.textContent = "Weak password"
        textIfStrong.style.color = "red"
    }
}

function checkingEquality() {
    if (confirmPass.value != pass.value) {
        textIfEqual.textContent = "Passwords are not the same"
        textIfEqual.style.color = "red"
    } else {
        textIfEqual.textContent = "Passwords are the same"
        textIfEqual.style.color = "green"
    }
}