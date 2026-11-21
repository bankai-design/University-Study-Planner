const pass = document.querySelector(".pass1")
const confirmPass = document.querySelector(".pass2")
const textIfEqual = document.querySelector(".isEqual")

confirmPass.addEventListener("input", checkingEquality)


function checkingEquality() {
    if (confirmPass.value != pass.value) {
        textIfEqual.textContent = "Passwords are not the same"
        textIfEqual.style.color = "red"
    } else {
        textIfEqual.textContent = "Passwords are the same"
        textIfEqual.style.color = "green"
    }
}