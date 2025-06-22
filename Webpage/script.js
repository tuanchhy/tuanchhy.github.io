document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href'); 
        const target = document.querySelector(targetId); 
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' }); 
        }
    });
});

const activitiesSection = document.getElementById('activities');
if (activitiesSection) {
    activitiesSection.addEventListener('mouseover', () => {
        alert("Explore Westlife's amazing journey and activities!");
    });
}
