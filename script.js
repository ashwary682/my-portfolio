document.addEventListener('DOMContentLoaded',()=> {
    const aboutlink = document.getElementById('sbout-link');
 const aboutSection = document.getElementById('about-section');
function hideAllSection(){
    constsections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
    }
aboutLink.addEventListener('click', (event) => {
        event.preventDefault(); 
        hideAllSections();
        aboutSection.classList.add('active');
});
});