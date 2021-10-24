// init github globally
const http = new GitHub();
// init UI
const ui = new UI();

// keylogging in the input
const searchInput = document.querySelector(`#searchUser`);

searchInput.addEventListener(`keyup`, (e) => {
  // dapetin inputnya
  const userText = e.target.value;
  if (userText !== ``) {
    //     HTTP call
    http.getUser(userText).then((data) => {
      if (data.profile.message === `Not Found`) {
        ui.showAlert(`User not found`, `alert alert-danger`);
      } else {
        // give profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear profile
    ui.clearFields();
  }
});
