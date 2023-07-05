const form = document.getElementById("my-form");
const btnSubmit = document.getElementById("my-btn-submit");
const btnLoading = document.getElementById("my-btn-loading");
const myAlert = document.getElementById("my-alert");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);
  // ketika submit diklik, tampilkan btn Loading dan hilangkan Submit
  btnSubmit.classList.toggle("d-none");
  btnLoading.classList.toggle("d-none");
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      // ketika berhasil tampilkan alert dan ubah btn Loading jadi Submit
      myAlert.classList.toggle("alert-warning");
      myAlert.classList.toggle("d-none");
      status.innerHTML = "<b>Thank you!</b> your message was sent successfully";
      btnSubmit.classList.toggle("d-none");
      btnLoading.classList.toggle("d-none");
      form.reset();
    })
    .catch((error) => {
      myAlert.classList.toggle("alert-danger");
      myAlert.classList.toggle("d-none");
      status.innerHTML = "<b>Oops!</b> There was a problem sending your message";
      btnSubmit.classList.toggle("d-none");
      btnLoading.classList.toggle("d-none");
    });
}
form.addEventListener("submit", handleSubmit);

// NavLink
// var btnContainer = document.getElementById("navbarNav");
// var btns = btnContainer.getElementsByClassName("nav-link");

// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', function () {
//     var current = document.getElementsByClassName("waduh");
//     current[0].className = current[0].className.replace(" waduh");
//     this.className += " waduh";
//   });
// }

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("waduh");
        document.querySelector("nav ul li a[href*=" + id + "]").classList.add("waduh");
      });
    }
  });
};
