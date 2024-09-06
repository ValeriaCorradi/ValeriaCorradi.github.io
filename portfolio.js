// scroll to section
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

//close the manu and go back to the last page
function goBack() {
  window.history.back();
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