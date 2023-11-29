function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    var header = document.querySelector('.header');
    header.classList.toggle('dark-mode');
}