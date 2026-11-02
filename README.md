# TermType IDE ⚡ Learn Programming by Typing Real Code

A modern, minimalist, Awwwards-inspired **interactive IDE typing platform**. Designed specifically for people who want to learn programming from scratch, build muscle memory, and understand whether they are doing things right—by **typing real code, seeing real output, and learning by doing**.

Built with **React 19**, **Tailwind CSS v4**, and **Vite** (pure modern JavaScript / JSX, no TypeScript).

---

## 🎯 The Core Philosophy: Learn by Doing in an Authentic IDE

Most typing tests drill random English words or out-of-context phrases. Most coding tutorials force you to passively watch videos without building typing muscle memory.

**TermType IDE** unifies both worlds:
1. **You practice typing by typing actual code.**
2. **You learn programming step-by-step (Easy → Advanced).**
3. **An integrated terminal console executes and visualizes your code output.**

---

## 💻 Authentic IDE Workspace Architecture

- **Awwwards-Style Floating Pill Navigation**:
  - Frosted glass floating pill with minimalist language switcher (`Python`, `JavaScript`, `Go`, `Rust`, `SQL`), lesson progress indicator, modern sound toggle, and theme controls.
- **Left Sidebar File Explorer**:
  - Structured course syllabus represented as real project files (e.g. `01_hello_print.py`, `04_create_functions.py`, `08_algorithm_bubble_sort.py`).
  - Shows completed checkmarks `✓` and category badges. Collapsible via `Ctrl+B` / `⌘B` for full-screen focus.
- **Editor Tabs & Contextual Task Banner**:
  - Active file tabs (`● 04_create_functions.py`).
  - Clear, zero-confusion task header stating **what to code** and **why it matters**.
- **Hero Typing Editor Area**:
  - Clean monospace line numbers (`1`, `2`, `3`...).
  - High-contrast letter legibility, proper indentation, and responsive blinking cursor.
  - Professional MacBook Scissor / Studio Thock audio on every keystroke.
- **Integrated Terminal & Output Console**:
  - Simulates real CLI execution (`$ python3 04_create_functions.py`).
  - When you finish typing, the terminal outputs the exact execution result so you can visualize what your code accomplished.
- **IDE Status Bar**:
  - Live bottom status bar tracking Git branch `main`, error count, runtime version, line numbers, live WPM, and accuracy.

---

## 📚 Structured Learning Curriculum (Easy → Advanced)

| Level | File Name | Core Concept | What You Build & Visualize |
| :--- | :--- | :--- | :--- |
| **01** | `01_hello_print.py` | Printing & Basics | `print()` strings and console dividers |
| **02** | `02_variables_types.py` | Variables & F-Strings | Declare strings, integers, floats, booleans |
| **03** | `03_conditionals_logic.py` | Conditionals | `if`, `elif`, `else` branch decision logic |
| **04** | `04_create_functions.py` | Functions & Return | `def calculate_total(price, tax_rate)` |
| **05** | `05_loops_and_lists.py` | Loops & Lists | `for` loops, iterating items & calculating averages |
| **06** | `06_methods_and_dicts.py` | Dictionaries & Methods | Key-value mapping for fast $O(1)$ lookups |
| **07** | `07_oop_classes.py` | OOP & Methods | Class blueprints, `__init__`, instance methods |
| **08** | `08_algorithm_bubble_sort.py` | Algorithms: Sorting | Classic Bubble Sort in-place swapping |
| **09** | `09_algorithm_binary_search.py` | Algorithms: Searching | $O(\log n)$ Binary Search with pointers |
| **10** | `10_database_sqlite.py` | Databases & SQL | In-memory SQLite tables, inserts, and queries |

*(Tracks also available for **JavaScript**, **Go**, **Rust**, and **SQL**)*.

---

## ⌨️ Shortcuts & Controls
- **`Enter`**: Execute / Advance to next lesson upon completion.
- **`Tab`**: Indent 4 spaces without losing focus.
- **`Esc`**: Reset current file.
- **`⌘B` / `Ctrl+B`**: Toggle File Explorer sidebar.

---

## 🚀 Running the Project

```bash
# Start development server
npm run dev

# Build for production
npm run build
```
