const button = document.querySelector(".btnTheme");
let isDarkTheme = false;

button.addEventListener("click", () => {
    if (isDarkTheme) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "#444444";

        const footer = document.querySelector(".footer");
        if (footer) {
            footer.style.backgroundColor = "black";
            footer.style.color = "#444444";
        }
        
        document.querySelectorAll(".navbar").forEach(element => {
            element.style.backgroundColor = "white";
            element.style.color = "#444444";
        });
    } else {
        document.body.style.backgroundColor = "#444444";
        document.body.style.color = "white";
        
        document.querySelectorAll(".navbar, .footer").forEach(element => {
            element.style.backgroundColor = "gray";
            element.style.color = "white";
        });
    }

    isDarkTheme = !isDarkTheme;
});
