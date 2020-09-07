document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");

    const tbody = document.getElementById("tbody");
    const categorias = [...document.getElementsByClassName("dropdown-item")];

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
            console.log(document.querySelectorAll(`[data-categoria=${event.target.id}`));
        });
    });
});
