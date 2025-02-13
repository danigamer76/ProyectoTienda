const logout = document.getElementById("logout"); // Obtiene el botón de logout

const CLIENT_ID = 'b56iyc53s8wyctpeprq08em8a9h9w4' // ID de la aplicación
const SECRET_ID = 'hwkflnv98yecesec5rnectsb4n24ho20' // Clave secreta de la aplicación

const productos = fetch("json/productos.json")
                    .then(function(response) {
                        return response.json();
                    })


document.addEventListener("DOMContentLoaded", () => {
    let username = localStorage.getItem("username"); // Recupera el nombre
    if (username) {
        document.getElementById("user-welcome").textContent = username;
        productos.then(function(productos){
            let placeholder = document.querySelector("#data-output");
            let out = "";
            for(let i = 0; i < productos.length; i++) {
                out += `<div id="producto">
                            <img src="${productos[i].imagen}" id="img" alt="${productos[i].nombre}">
                            <h3>${productos[i].nombre}</h3>
                            <p>${productos[i].precio}</p>
                        </div>`;
            }

            placeholder.innerHTML = out;
        })

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

