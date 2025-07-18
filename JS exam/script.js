


// function addProduct(){
//     const title=document.getElementById("title");
// const price=document.getElementById("price");
// const img=document.getElementById("img");
// const category=document.getElementById("category");



let products = JSON.parse(localStorage.getItem("products")) || [];
let editId = null;

function addProduct() {
  const title = document.getElementById("title").value.trim();
  const price = document.getElementById("price").value.trim();
  const image = document.getElementById("image").value.trim();
  const category = document.getElementById("category").value.trim();

  if (!title || !price) {
    alert("Please enter both Title and Price");
    return;
  }

  if (editId) {
  // Update the existing product
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === editId) {
      products[i].title = title;
      products[i].price = parseFloat(price);
      products[i].image = image || "https://via.placeholder.com/70";
      products[i].category = category;
      break;
    }
  }
  editId = null;
} else {
  // Add new product
  const newProduct = {
    id: Date.now(),
    title: title,
    price: parseFloat(price),
    image: image || "https://via.placeholder.com/70",
    category: category,
  };
  products.push(newProduct);
}


  localStorage.setItem("products", JSON.stringify(products));
  displayProducts();
  clearForm();
}

function displayProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <div>
        <strong>${p.title}</strong><br>
        ₹${p.price}<br>
        <em>${p.category}</em><br><br>
        <button onclick="editProduct(${p.id})">✏️ Edit</button>
        <button onclick="deleteProduct(${p.id})">🗑️ Delete</button>
      </div>
    `;

    list.appendChild(card);
  });
}

function editProduct(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    document.getElementById("title").value = product.title;
    document.getElementById("price").value = product.price;
    document.getElementById("image").value = product.image;
    document.getElementById("category").value = product.category;
    editId = id;
  }
}

function deleteProduct(id) {
  if (confirm("Are you sure you want to delete this product?")) {
    products = products.filter(p => p.id !== id);
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
  }
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("price").value = "";
  document.getElementById("image").value = "";
  document.getElementById("category").value = "";
}

displayProducts();
