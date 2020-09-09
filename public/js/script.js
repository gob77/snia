document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");

    const tbody = document.getElementById("tbody");
    const categorias = [...document.getElementsByClassName("dropdown-item")];
    let login = document.getElementById("login");

    (async function () {
        let data = await fetch("/main");
        let parsed = await data.json();

        let keys = Object.keys(parsed.info);

        keys.forEach((index) => {
            let tr = document.createElement("tr");
            let itemTD = document.createElement("td");
            let precioTD = document.createElement("td");

            tr.setAttribute("data-categoria", parsed.info[index].producto);
            tr.setAttribute("data-key", index);
            tr.setAttribute("class", "producto");

            let itemTXT = document.createTextNode(parsed.info[index].item);
            let precioTXT = document.createTextNode(`$${parsed.info[index].precio}`);

            itemTD.appendChild(itemTXT);
            precioTD.appendChild(precioTXT);

            tr.appendChild(itemTD);
            tr.appendChild(precioTD);

            tbody.appendChild(tr);
        });
    })();

    categorias.forEach((index) => {
        index.addEventListener("click", (event) => {
            let products = [...document.getElementsByClassName("producto")];

            products.forEach((index) => {
                if (event.target.id != "todos") {
                    if (index.dataset.categoria != event.target.id) {
                        index.style.display = "none";
                    } else {
                        index.style.display = "";
                    }
                } else {
                    index.style.display = "";
                }
            });
        });
    });

    login.addEventListener("click", async () => {
        let email = document.getElementById("email").value;
        let password = document.getElementById("pass").value;

        let data = {
            email,
            password,
        };

        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        };

        let sendData = await fetch("/login", options);
        let parsedData = await sendData.json();

        console.log(parsedData);
    });
});
