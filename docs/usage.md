# Usage Guide – Keylogger Project

## How to Run

1. Open the project in a browser via GitHub Pages:
https://str8UPpsavage.github.io/keylogger-project/
2. Start typing anywhere on the page.
3. Every 10 characters, a simulated "send" is logged to the browser console:
- Method: `fetch()`
- Endpoint: `https://example.com/log`
- Payload: JSON object with all captured keystrokes

## Console Output Example

```json
Simulated send: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
