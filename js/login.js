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
        if (username.value !== "" || password.value !== "") {
            e.preventDefault();
            window.location.href = "home.html" + "?username=" + username.value;
        }
    }
});