# C-Powered Full-Stack Calculator

A modern, responsive web-based calculator that mirrors robust low-level arithmetic logic. This project demonstrates a clean separation of concerns, pairing a polished frontend UI with an optimized backend control flow logic.

## Features  

* **Dual-Layer Architecture:** Interactive web user interface powered by core C structural logic.
* **Full Arithmetic Suite:** Supports Addition, Subtraction, Multiplication, Division, and Modulo.
* **Edge-Case Validation:** Prevents application runtime crashes with explicit zero-divisor validation (`if-else` guards inside `switch-case` blocks).
* **Modern UI/UX:** A sleek, smartphone-inspired dark-mode theme featuring responsive layouts and smooth button animations.

-----

## Repository Structure

* `switchcase.c`: The core backend logic file utilizing structural C formatting and switch-case operations.
* `index.html`: The structural markup defining the calculator grid layout and button interface.
* `style.css`: Premium dark-mode aesthetics, absolute positioning, hover transformations, and active click scaling.
* `script.js`: The frontend interface logic handling DOM updates and input streaming.
* `.gitignore`: Built-in rule list preventing compiled binaries (`.exe`, `.out`) or IDE configurations from cluttering the repo.

-----

## How to Run the Project Local Interfaces 

### Method A: Running the Modern Web UI (Recommended)
Simply open the `index.html` file in any modern web browser (Chrome, Edge, Firefox, Safari) to interact with the responsive, stylized layout immediately.

### Method B: Running the Native C Terminal Program
To execute the raw native backend inside your command line:

1. Ensure you have a C compiler installed (e.g., `gcc`).
2. Open your terminal in the root folder and compile the file:
   ```bash
   gcc switchcase.c -o calculator
