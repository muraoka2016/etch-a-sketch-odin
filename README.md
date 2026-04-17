# 🎨 Etch-a-Sketch (Browser Version)

A retro-inspired **Etch-a-Sketch drawing app** built with vanilla JavaScript, HTML, and CSS.
Draw directly on a dynamic grid using your mouse, just like a digital sketchpad.

---

## 🚀 Features

- 🧱 **Dynamic Grid**
  - Adjustable grid size (up to 100x100)
  - Fully responsive layout (no fixed dimensions)

- 🖱️ **Click & Drag Drawing**
  - Hold mouse button to draw
  - Release to stop drawing

- 🎚️ **Progressive Shading**
  - Squares darken gradually as you pass over them

- 🔄 **Reset Button**
  - Clears the grid
  - Restores default size

- ⚠️ **Input Validation**
  - Prevents invalid grid sizes
  - Displays user-friendly warnings

---

## 🛠️ How to Use

1. Enter a number (grid size) in the input field
   - Must be between **1 and 100**

2. Click the **Change** button
   - Grid will update to the selected size

3. Click and hold your mouse inside the grid
   - Move the cursor to draw

4. Release the mouse to stop drawing

5. Click **Reset** to:
   - Clear the drawing
   - Restore default grid size (16x16)

---

## 🧠 How It Works

- The grid is generated dynamically using JavaScript
- Each square is a `<div>` element
- Mouse events (`mousedown`, `mouseup`, `mousemove`) control drawing
- Opacity and color are updated in real time for shading effects
- Layout uses **Flexbox + percentages** for responsiveness

---

## 🎨 Styling

- Retro-inspired UI (90s aesthetic)
- Gradient background (sunset tones)
- Neon-inspired buttons and borders
- Pixel-style fonts (optional)

---

## 📦 Tech Stack

- HTML5
- CSS3 (Flexbox, gradients, responsive units)
- JavaScript (DOM manipulation, events)

---

## 🔧 Possible Improvements

- Color picker
- Eraser tool
- Save / export drawing
- Touch support (mobile)
- Grid toggle (show/hide borders)

---

## 📌 Notes

- No external libraries used
- Runs entirely in the browser
- Designed as a learning project (DOM + events + layout)

---

## 💡 Inspiration

Inspired by the classic Etch-a-Sketch toy and modern browser-based drawing apps.

---

## 🧭 Status

✅ Fully functional
🛠️ Open for improvements

---

Enjoy drawing! 🎨
