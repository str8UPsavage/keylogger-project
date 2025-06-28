# keylogger-project

A simple browser-based keylogger designed for educational and demonstration purposes only.

> ⚠️ This project is intended strictly for **ethical and academic** use. Do not use it on systems or networks without explicit permission.

## 🔍 Overview

This project simulates basic keylogging behavior using JavaScript in a browser environment. It captures keystrokes and simulates sending the data to a remote server endpoint for analysis or storage.

The application is fully client-side and does not store or transmit any real data unless configured explicitly.

## 🛠️ Technologies Used

- HTML5
- JavaScript (Vanilla)
- GitHub Pages (for hosting)

## 📁 Files

- `index.html` – Main page capturing input events.
- `logger.js` – External script that collects and simulates transmission of keystrokes.
- `README.md` – Project description.

## 🚀 How It Works

1. JavaScript listens to keyboard input events (`keydown`).
2. Keystrokes are collected in an array.
3. Once a threshold is reached, the logger simulates sending the data to a fictional endpoint using `fetch()`.

This mimics common techniques used in real-world keyloggers without causing harm or unauthorized access.

## 📄 Disclaimer

This project is for **educational use only**. Using keyloggers without consent is illegal and unethical. Always conduct cybersecurity experiments in isolated, controlled, and authorized environments.

## 📬 Contact

For questions or feedback, feel free to open an issue.
