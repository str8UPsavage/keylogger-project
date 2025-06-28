# Technical Specifications – Keylogger Project

## Architecture

- **Frontend only**: Pure HTML and JavaScript
- **Logging logic**: Captures key events via the DOM (`keydown`)
- **Transmission logic**: Data is simulated to be sent using the Fetch API to a fake endpoint

## Data Handling

- Captured data: Array of raw keystrokes
- Buffer length: 10 characters before each simulated transmission
- Endpoint (mock): `https://example.com/log`

## Security Considerations

- All data remains local unless a real endpoint is configured
- HTTPS enforced via GitHub Pages
- No persistent storage (no cookies, no localStorage)

## Browser Compatibility

- Tested on: Chrome, Firefox, Edge
- Requirements: JavaScript enabled, modern browser

## Deployment

- Hosted via GitHub Pages from the root of the `main` branch
- Entry point: `index.html`

## Limitations

- Not obfuscated or hidden (deliberately transparent for educational value)
- No input field tracking; captures raw document-level keypresses only
