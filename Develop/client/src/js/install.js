const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installBtn.style.visibility = 'visible';
    textHeader.textContent = 'Click the button to install!';
  
    installBtn.addEventListener('click', () => {
      event.prompt();
      
    });
  });

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      return;
    }
      promptEvent.userChoice.then(result => {
        console.log("userChoice", result)})
        
        window.deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    installBtn.setAttribute('disabled', true);
    installBtn.textContent = 'Installed!';
    textHeader.textContent = 'Successfully installed!';
    console.log('👍', 'appinstalled', event);
  });