const button = document.querySelector(".btnTheme");
let isDarkTheme = false;

const applyLightTheme = () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#444444";

    const footer = document.querySelector(".footer");
    if (footer) {
        footer.style.backgroundColor = "black";
        footer.style.color = "#444444";
    }

    const account = document.querySelector(".account");
    if (account) {
        account.style.backgroundColor = "coral";
        account.style.color = "white";
    }

    const searchInput = document.querySelector(".search-input");
    if (searchInput) {
        searchInput.style.backgroundColor = "white";
        searchInput.style.color = "black";
    }

    const searchBtn = document.querySelector(".search-button");
    if (searchBtn) {
        searchBtn.style.backgroundColor = "coral";
        searchBtn.style.color = "white";
    }

    const btnTheme = document.querySelector(".btnTheme");
    if (btnTheme) {
        btnTheme.style.backgroundColor = "coral";
        btnTheme.style.color = "white";
    }

    document.querySelectorAll(".navbar").forEach(element => {
        element.style.backgroundColor = "white";
        element.style.color = "#444444";
    });
};

const applyDarkTheme = () => {
    document.body.style.backgroundColor = "#444444";
    document.body.style.color = "white";

    const footer = document.querySelector(".footer");
    if (footer) {
        footer.style.backgroundColor = "gray";
        footer.style.color = "white";
    }

    const account = document.querySelector(".account");
    if (account) {
        account.style.backgroundColor = "white";
        account.style.color = "black";
    }

    const searchInput = document.querySelector(".search-input");
    if (searchInput) {
        searchInput.style.backgroundColor = "#666666";
        searchInput.style.color = "white";
    }

    const searchBtn = document.querySelector(".search-button");
    if (searchBtn) {
        searchBtn.style.backgroundColor = "white";
        searchBtn.style.color = "black";
    }

    const btnTheme = document.querySelector(".btnTheme");
    if (btnTheme) {
        btnTheme.style.backgroundColor = "white";
        btnTheme.style.color = "black";
    }

    document.querySelectorAll(".navbar").forEach(element => {
        element.style.backgroundColor = "gray";
        element.style.color = "white";
    });
};

button.addEventListener("click", () => {
    if (isDarkTheme) {
        applyLightTheme();
    } else {
        applyDarkTheme();
    }
    isDarkTheme = !isDarkTheme;
});


document.querySelector('.feedback-button').addEventListener('click', () => {
    const feedText = document.querySelector(".feedback-input");
    if (feedText === null || feedText.value.trim() === '') {
        alert('Пожалуйста, введите ваш отзыв.');
    } else {
        alert('Ваш отзыв отправлен!');
    }
});