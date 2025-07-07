
# 🛍️ Product Showcase & Shopping Cart 🛒

Welcome to the **Product Display and Shopping Cart Web App** — a simple yet powerful e-commerce layout built using vanilla JavaScript!  
Display products, add them to your cart, manage quantities, and even see the billing details live — all from `localStorage`. 🎯

---

## 🚀 Features

✨ **Dynamic Product Rendering**  
🎨 Products are generated dynamically from a JSON-like array with images, titles, ratings, and descriptions.

🛒 **Add to Cart Functionality**  
Clicking "Add To Cart" updates the cart — increasing quantity if it already exists or adding a new product!

📦 **Live Cart Display**  
View cart items in real-time with:  
- Product image 📸  
- Price 💰  
- Quantity 🔢  
- Delete button ❌

💵 **Auto Billing Calculation**  
Cart includes:  
- Total amount  
- 💸 5% discount  
- Final payable total ✅  

💾 **LocalStorage Integration**  
Keeps your cart saved, even after page reloads. 🔄

---

## 🧩 Project Structure

- `productlist[]` – Contains all product objects with fields like `title`, `price`, `description`, `image`, and `rating`.
- `displayProduct()` – Renders all products in `.products` container.
- `AddToCart()` – Handles adding or updating products in the cart.
- `displayCart()` – Shows the current cart items with quantity and billing.
- `clearCart()` – Removes a selected item from the cart.

---

## 🖼️ Sample Products

👕 Men's & Women's Clothing  
💍 Jewelry  
💻 Electronics

> Pulled from [FakeStoreAPI](https://fakestoreapi.com/) — perfect for testing layouts!

---

## 📸 Screenrecording 


https://github.com/user-attachments/assets/ff4b1d54-2d8b-40f5-b74c-6e161ac398bf



```
---


## 🛠️ Technologies Used

* 🧠 **JavaScript** – DOM Manipulation, Events, localStorage
* 🖼️ **HTML/CSS** – Layout and Styling
* 🧪 **Fake Store API (Static Data)** – Product Data

---

## 🙌 Author

Made with 💖 by Abhishek Tiwari
If you like it, ⭐️ the repo or share it with fellow devs!

---

## 📌 Tip

This project can easily be extended with:

* Login/authentication 👤
* Quantity control in cart ➕➖
* Backend/database integration 💾
* Sorting and filtering features 🔍

---

🛍️ **Happy Coding and Carting!** 🎉

```

