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

// Call the function to load the footer
loadFooter();