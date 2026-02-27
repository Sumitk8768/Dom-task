const cardContainer = document.querySelector(".card-container");
const form = document.querySelector("form");

let editProductId = null;

let inventory = JSON.parse(localStorage.getItem("inventory")) || [
  {
    id: 1,
    productName: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    quantity: 25,
    stock: "In Stock",
    vendor: "LogiTech Suppliers",
    dateAdded: "2026-02-20"
  },
  {
    id: 2,
    productName: "Office Chair",
    category: "Furniture",
    price: 5499,
    quantity: 10,
    stock: "Low Stock",
    vendor: "Urban Furnishings",
    dateAdded: "2026-02-18"
  }
];

function saveToLocalStorage() {
  localStorage.setItem("inventory", JSON.stringify(inventory));
}

function renderProduct() {

  if (inventory.length === 0) {
    cardContainer.innerHTML = `<h2>No Products Available</h2>`;
    return;
  }

  let html = "";

  inventory.forEach((item) => {
    html += `
      <div class="card">
        <h2>${item.productName}</h2>
        <h3>Category: <span>${item.category}</span></h3>
        <h3>Price: ₹<span>${item.price}</span></h3>
        <h3>Quantity: <span>${item.quantity}</span></h3>
        <h3>Stock: <span>${item.stock}</span></h3>
        <h3>Vendor: <span>${item.vendor}</span></h3>
        <h3>Date: <span>${item.dateAdded}</span></h3>

        <div class="buttons-container">
          <button class="edit-btn" data-id="${item.id}">Edit</button>
          <button class="delete-btn" data-id="${item.id}">Delete</button>
        </div>
      </div>
    `;
  });

  cardContainer.innerHTML = html;
}

renderProduct();

form.addEventListener("submit", function (e) {

  e.preventDefault();

  const productData = {
    productName: form.childNodes[1].value,
    category: form.childNodes[3].value,
    price: Number(form.childNodes[5].value),
    quantity: Number(form.childNodes[7].value),
    stock: form.childNodes[9].value,
    vendor: form.childNodes[11].value,
    dateAdded: form.childNodes[13].value
  };

  if (editProductId !== null) {

    const index = inventory.findIndex(item => item.id === editProductId);

    if (index !== -1) {
      inventory[index] = {
        ...inventory[index],
        ...productData
      };
    }

    editProductId = null;
    form.querySelector("button").textContent = "Add Product";

  } else {

    productData.id = inventory.length
      ? Math.max(...inventory.map(item => item.id)) + 1
      : 1;

    inventory.push(productData);
  }

  saveToLocalStorage();
  renderProduct();
  form.reset();
});

cardContainer.addEventListener("click", function (e) {

  const id = Number(e.target.dataset.id);

  if (e.target.classList.contains("delete-btn")) {

    inventory = inventory.filter(item => item.id !== id);

    saveToLocalStorage();
    renderProduct();
  }

  if (e.target.classList.contains("edit-btn")) {

    const product = inventory.find(item => item.id === id);

    if (product) {

      form.childNodes[1].value = product.productName;
      form.childNodes[3].value = product.category;
      form.childNodes[5].value = product.price;
      form.childNodes[7].value = product.quantity;
      form.childNodes[9].value = product.stock;
      form.childNodes[11].value = product.vendor;
      form.childNodes[13].value = product.dateAdded;

      editProductId = id;

      form.querySelector("button").textContent = "Update Product";
    }
  }

});

