// scroll to section
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
  //_________________CREATE SCROLL ANIMATION___________________________________
}

// Function to load the footer
function loadFooter() {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('#footer').innerHTML = data;
    });
}

// Function to load the nav
function loadNav() {
  fetch('nav.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('#nav').innerHTML = data;
    });
}

// Call the function to load the footer
loadNav();
loadFooter();