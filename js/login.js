const submit = document.getElementById('submit')
const password = document.getElementById('password')
const username = document.getElementById('username')
const visible = document.getElementById('visible')

document.addEventListener("change", (e) => {
    if (e.target === visible) {
        if (visible.checked) {
            password.type = "text";
        } else {
            password.type = "password";
        }
    }
});

document.addEventListener("click", (e) => {
    if (e.target === submit) {
        e.preventDefault(); // Evita que se recargue la página
        if (username.value !== "" || password.value !== "") {
            localStorage.setItem("username", username.value);
            console.log(username.value) // Guarda el usuario en localStorage
            window.location.href = "home.html"; // Redirige a home.html
        } else {
            alert("Por favor, rellena los campos");
        }
    }
});