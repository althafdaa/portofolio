// init github globally
const http = new GitHub();
// init UI
const ui = new UI();

// definisikan tempat input
const searchInput = document.querySelector(`#searchUser`);
// eventlistener with key up
searchInput.addEventListener(`keyup`, (e) => {
  // definisikan input valuenya
  const userText = e.target.value;
  // jika input TIDAK kosong
  if (userText !== ``) {
    //     HTTP call
    http.getUser(userText).then((data) => {
      // jika muncul error 404 / notfound
      if (data.profile.message === `Not Found`) {
        ui.showAlert(`User not found`, `alert alert-danger`);
      } else {
        // ambil profile dari API
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
    // jika input kosong, hapus semua hasil pencarian
  } else {
    ui.clearFields();
  }
});

// modeText and icon definition
const modeText = document.querySelector(`.mode`);
const ico = document.querySelector(`#ico`);

// check localstorage
const currentTheme = localStorage.getItem(`theme`);
// jika di localstorage ada isinya yang namanya light
// set mode ke light
if (currentTheme === `light`) {
  document.body.querySelector(`input[type="checkbox"]`).checked = true;
  document.body.classList.add(`dark-theme`);
  modeText.innerHTML = `Light Mode`;
  ico.className = `bi bi-sun-fill`;
}

// switching dark-light theme
const switcher = document.querySelector(`.theme-switch`);
// event listener based on the change of swticher
switcher.addEventListener(`change`, themeChange);

function themeChange(e) {
  // hal pertama yang dilakukan toggle kelas darktheme pada body
  // toggle = jika tidak ada tambahkan, jika ada hapus
  document.body.classList.toggle("dark-theme");
  if (e.target.checked === true) {
    modeText.innerHTML = `Light Mode`;
    ico.className = `bi bi-sun-fill`;
    localStorage.setItem(`theme`, `light`);
  } else {
    modeText.innerHTML = `Dark Mode`;
    ico.className = `bi bi-moon`;
    localStorage.clear();
  }
}
