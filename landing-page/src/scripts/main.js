document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('home');
    const projectsButton = document.getElementById('projects');
    const aboutMeButton = document.getElementById('about-me');

    homeButton.addEventListener('click', () => {
        alert('Home button clicked');
    });

    projectsButton.addEventListener('click', () => {
        alert('Projects button clicked');
    });

    aboutMeButton.addEventListener('click', () => {
        alert('About Me button clicked');
    });
});