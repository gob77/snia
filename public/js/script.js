document.addEventListener("DOMContentLoaded", () => {
    /* const url = "https://localhost:5501/"; */

    async function getData() {
        let data = await fetch("/getData");
        let parsed = await data.json();

        console.log(data);
    }

    getData();
});
