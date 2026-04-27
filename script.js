const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

/* HAMBURGER MENU */
toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

/* ACHIEVEMENTS TOGGLE */
document.querySelectorAll('.achievement-card').forEach(card => {
    const btn = card.querySelector('.achievement-btn');

    btn.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});