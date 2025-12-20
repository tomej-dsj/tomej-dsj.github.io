(() => {
    const pathParts = window.location.pathname.split('/');
    let currentPage = pathParts.pop();

    if (currentPage === '' || !currentPage.includes('.html')) {
        currentPage = 'index.html';
    }

    document.querySelectorAll('.sekcje a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = link.getAttribute('href') + currentPage;
        });
    });
})();

const currentSection = window.location.pathname.split('/')[1];

document.querySelectorAll('.sekcje a').forEach(link => {
    if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
    }
});