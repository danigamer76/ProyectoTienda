const logout = document.getElementById("logout"); // Obtiene el botón de logout


document.addEventListener("DOMContentLoaded", () => {
    let username = localStorage.getItem("username"); // Recupera el nombre
    if (username) {
        document.getElementById("user-welcome").textContent = username;
    } else {
        document.getElementById("user-welcome").textContent = "Invitado";
    }
});

document.addEventListener("click", (e) => {
    if (e.target === logout) {
        localStorage.removeItem("username");
        window.location.href = "login.html";
    }
});
