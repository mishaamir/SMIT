const URL = "https://dummyjson.com/products";

const message = document.getElementById("message");
const productsBox = document.getElementById("products");

const showProducts = (products) => {
  products.forEach((product) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p class="brand">${product.brand || "No brand"}</p>
      <p class="price">$${product.price}</p>
    `;
    productsBox.appendChild(card);
  });
};

message.innerText = "Loading products...";
message.className = "message show loading";

fetch(URL)
  .then((response) => {
    console.log("Status:", response.status);

    if (!response.ok) {
      throw new Error("Server returned status " + response.status);
    }
    return response.json();
  })

  .then((data) => {
    let products = data.products;
    console.log("First product brand:", products[0].brand);
    message.className = "message";
    showProducts(products.slice(0, 8));
  })

  .catch((err) => {
    message.innerText = "Could not load products: " + err.message;
    message.className = "message show error";
  });
