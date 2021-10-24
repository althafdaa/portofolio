class UI {
  constructor() {
    //   tempat taro profile
    this.profile = document.getElementById(`output`);
  }

  showProfile(user) {
    this.profile.innerHTML = `
        <div class="cardbg card card-body mb-3 border-1 border-white">
            <div class="row">
                  <div class="col-md-3 ">
                        <img class="img-fluid rounded-circle mb-3" src="${user.avatar_url}">
                        <a href ="${user.html_url}" target="_blank" class="btn btn-dark w-100 mb-4" >View profile</a>
                  </div>
                  <div class="col-md-9 text-center">
                  <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
                  <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
                  <span class="badge bg-success">Followers: ${user.followers}</span>
                  <span class="badge bg-info">Public Repos: ${user.following}</span>
                 <br><br>
                 <ul class="list-group text-center">
                        <li class="cardbg text-white list-group-item border-0">Company<br> ${user.company}</li>
                        <li class="cardbg text-white list-group-item border-0">Website/Blog<br> ${user.blog}</li>
                        <li class="cardbg text-white list-group-item border-0">Location<br> ${user.location}</li>
                        <li class="cardbg text-white list-group-item border-0">Member since<br> ${user.created_at}</li>
                 </ul></div>
            </div>
            <div class="row">
                  <h3 class="page-heading mb-3 text-white">Latest Repos:</h3>
                  <div class="repos"></div>
            </div>
        </div>
       
        `;
  }
  showRepos(repos) {
    // karena repos dalam bentuk array
    // loop dengan foreach
    let output = ``;
    repos.forEach((repo) => {
      output += `
    <div class="card card-body mb-2">
      <div class="row">
        <div class="col-md-6">
       <a href="${repo.html_url}" target"_blank" class="fw-bold"> ${repo.name}</a>
        </div>
        <div class="col-md-6">
        <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
        <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
        <span class="badge bg-success">Forks: ${repo.forks_count}</span>
        </div>
      </div>
    </div>
    `;
    });
    // yang sudah di loop dikeluarin ke display
    document.querySelector(`.repos`).innerHTML = output;
  }
  showAlert(msg, className) {
    //   only show 1 alert, if theres more remove
    this.clearAlert();
    // create alert
    const div = document.createElement(`div`);
    div.className = className;
    const msgText = document.createTextNode(msg);
    div.appendChild(msgText);
    //     get parent to get appended
    const container = document.querySelector(`.searchContainer`);
    //     get search container
    const search = document.querySelector(`.search`);
    //     masukin alert
    container.insertBefore(div, search);
    //     timeout
    setTimeout(() => {
      document.querySelector(`.alert`).remove();
    }, 1500);
  }
  clearAlert() {
    const currentAlert = document.querySelector(`.alert`);
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  clearFields() {
    this.profile.innerHTML = ``;
  }
}
