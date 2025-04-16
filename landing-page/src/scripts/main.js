document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('home');
    const projectsButton = document.getElementById('projects');
    const aboutMeButton = document.getElementById('about-me');

  
    const isInPagesDirectory = window.location.href.includes('/pages/');
    
   
    const basePath = isInPagesDirectory ? '../' : './';

    homeButton.addEventListener('click', () => {
        window.location.href = `${basePath}index.html`;
    });

    projectsButton.addEventListener('click', () => {
        window.location.href = `${basePath}pages/projects.html`;
    });

    aboutMeButton.addEventListener('click', () => {
        window.location.href = `${basePath}pages/about.html`;
    });
});