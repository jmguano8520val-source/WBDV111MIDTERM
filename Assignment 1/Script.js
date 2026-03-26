// Get elements
const loginToggle = document.getElementById('loginToggle');
const loginDrawer = document.getElementById('loginDrawer');
const closeDrawer = document.getElementById('closeDrawer');
const overlay = document.getElementById('overlay');
const infoBtn = document.querySelector('.info-btn');
const navBtns = document.querySelectorAll('.nav-btn');


// Toggle login drawer
function openDrawer() {
    loginDrawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}


function closeDrawerFunc() {
    loginDrawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
}


loginToggle.addEventListener('click', openDrawer);
closeDrawer.addEventListener('click', closeDrawerFunc);
overlay.addEventListener('click', closeDrawerFunc);


// Nav button active state
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});


// Nutrients button functionality
infoBtn.addEventListener('click', () => {
    alert('Nutrition Info:\n- Avg. Calories per Meal: 450\n- Protein: 25-30g\n- Fiber: 8-12g\n- No added sugars');
});
