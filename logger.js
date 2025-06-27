const log = [];

document.addEventListener('keydown', function(event) {
  log.push(event.key);
  console.log("Key pressed:", event.key);

  // Aggiorna la textarea
  document.getElementById('logOutput').value = log.join('');
});
