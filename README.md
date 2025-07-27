Keylogger Project

This is not a real keylogger. It’s a browser demo built to understand how keylogging works in JavaScript. No backend, no sensitive data, no hidden tricks. Just a transparent look at how basic keystroke capture operates.

The script listens for keydown events, stores the inputs in an array, and once the array hits a threshold, it sends the content using fetch() to a fake endpoint. That’s it.

Why?  
Because understanding these mechanisms is essential for anyone working in Blue Team, detection engineering, or even secure frontend development. Knowing how the attack looks helps build proper defenses.

What it taught me:  
- Event-driven JS behavior in browsers  
- How input can be silently harvested and exfiltrated  
- Why client-side security can’t be trusted  
- How to simulate malicious behavior safely in a lab

Files:
- index.html: basic input page  
- logger.js: collects and "sends" the data  
- README.md: what you're reading now

Made for educational and lab use only. No real data is collected or sent. Do not use this outside of isolated environments.
