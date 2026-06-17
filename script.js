// Search Function

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");

if (searchBtn && searchBox) {
    searchBtn.addEventListener("click", () => {
        let value = searchBox.value;

        if (value.trim() === "") {
            alert("Please enter a product name");
        } else {
            alert("Searching for: " + value);
        }
    });
}

// Cart Counter

let count = 0;

const products = document.querySelectorAll(".product");
const cartCount = document.getElementById("cartCount");

products.forEach(product => {
    product.addEventListener("click", () => {
        count++;

        if (cartCount) {
            cartCount.innerText = count;
        }
    });
});

// Back To Top

const backBtn = document.querySelector(".back");

if (backBtn) {
    backBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Dark Mode

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeBtn.innerText = "☀️ Light Mode";
        } else {
            themeBtn.innerText = "🌙 Dark Mode";
        }

    });
}

// Welcome Message

alert("Hello");