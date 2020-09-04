document.addEventListener("DOMContentLoaded", () => {
    let btn = document.getElementById("btn");

    btn.addEventListener("click", async () => {
        let data = await fetch("/main");
        let parsed = await data.json();

        console.log(parsed);
    });
});
