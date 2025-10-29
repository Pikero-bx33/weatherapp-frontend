// Insert your code here

const registerBtnEl = document.getElementById("register")
const registerNameEl = document.getElementById("registerName")
const registerEmailEl = document.getElementById("registerEmail")
const registerPasswordEl = document.getElementById("registerPassword")

const connectionBtnEl = document.getElementById("connection")
const connectionEmailEl = document.getElementById("connectionEmail")
const connectionPasswordEl = document.getElementById("connectionPassword")


//REGISTER 
registerBtnEl.addEventListener('click', () => {
  const name = registerNameEl.value.trim()
  const email = registerEmailEl.value.trim()
  const password = registerPasswordEl.value.trim()

  // Vérification rapide côté front
  if (!email || !password) {
    alert("Merci de remplir tous les champs requis !");
    return;
  }

  fetch('https://weatherapp-backend-two-gamma.vercel.app/users/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);

      if (data.result === true) {
        // Succès → redirection vers index.html
        window.location.assign('index.html');
      } else {
        // Erreur → afficher le message du backend
        alert(data.error || "Une erreur est survenue.");
      }
    })
    .catch(err => {
      console.error("Erreur réseau :", err);
      alert("Impossible de contacter le serveur.");

    })
})

//CONNECTION
connectionBtnEl.addEventListener('click', () => {
  const email = connectionEmailEl.value.trim()
  const password = connectionPasswordEl.value.trim()

  // Vérification rapide côté front
  if (!email || !password) {
    alert("Merci de remplir tous les champs requis !");
    return;
  }

  fetch('https://weatherapp-backend-two-gamma.vercel.app/users/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
    .then(response => response.json())
    .then(data => {

      if (data.result === true) {
        // Succès → redirection vers index.html
        window.location.assign('index.html');
      } else {
        // Erreur → afficher le message du backend
        alert(data.error || "Une erreur est survenue.");
      }
    })
    .catch(err => {
      console.error("Erreur réseau :", err);
      alert("Impossible de contacter le serveur.");

    })
})

