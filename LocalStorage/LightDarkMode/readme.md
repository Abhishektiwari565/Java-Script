
## 🌗 Light & Dark Mode Toggle using JavaScript

A simple yet powerful project that allows users to switch between **Light Mode** ☀️ and **Dark Mode** 🌙 for a better viewing experience.
It uses `localStorage` to remember the user's choice even after refreshing or reopening the browser 🔁💾

---

### 🚀 Features

* 🎨 Toggle between **Light and Dark themes**
* 📦 Two styled boxes: `box1` and `box2`, both change colors
* 💾 **Persistent theme memory** using `localStorage`
* ⏱️ Loads saved theme when page opens
* 🧠 Easy-to-read and fully customizable JavaScript code
* 📱 Responsive design (add your own styling)

---

### 🖼️ Live Example

> Toggle between themes and watch both boxes update colors in real time — perfect for learning or quick UI prototyping.

---

demo video:

### 🧠 How It Works

1. **Default state**: Light mode is shown on first load.
2. **User clicks ON button**:

   * Applies **dark mode** styles
   * Saves `"dark"` to local storage
3. **User clicks OFF button**:

   * Applies **light mode** styles
   * Saves `"light"` to local storage
4. **On page load**:

   * The saved theme from `localStorage` is applied using `window.addEventListener("DOMContentLoaded")`

---


### 🛠️ How to Use

1. 🧱 Copy the HTML structure (`box1`, `box2`, `on`, `of`).
2. 📜 Include the JavaScript shown above.
3. (Optional) Add your custom CSS transitions or animations for smooth effects.
4. ✅ Done! The theme switcher is now working and persistent.

---

### 💡 Real-World Use Cases

* Portfolio websites with a theme switcher 🌐
* Admin dashboards 🧾
* Landing pages with accessibility focus 🦯
* Blog readers who prefer light or dark reading modes 📖

---

### 📌 Suggestions for Improvement

* Add a toggle switch instead of two buttons
* Save more UI settings like font size or background image
* Use CSS variables (`--bg-color`, `--text-color`) for easier theme management
* Add animation when theme changes ✨

---

### 📞 Contact

If you want help improving this project or converting it into a reusable theme module, feel free to ask! 😄

---

Let me know if you want this written as a `.md` file you can download or commit to GitHub.
