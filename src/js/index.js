
(function () {
    const menu = document.querySelector('.header-menu');
    const menuIcon = document.querySelector('.menu_wrapper');
    const overlay = document.querySelector('.overlay');
    menuIcon.addEventListener('click', e => {
        e.stopPropagation();
        menu.classList.add('show');
        overlay.style.display = 'block';
    });

    menu.addEventListener('click', e => {
        e.stopPropagation();
    });

    const closeBtn = document.querySelector('#close-menu');
    closeBtn.addEventListener('click', e => {
        e.stopPropagation();
        menu.classList.remove('show');
        overlay.style.display = 'none';
    });

    document.documentElement.addEventListener('click', e => {
        e.stopPropagation();
        if (e.target === overlay) {
            closeBtn.click();
            document.body.style.overflowY = 'auto';
            overlay.style.overflowY = 'hidden';
            overlay.innerHTML = '';
        }

    });

    $(".phone-num").mask("+ 996 (ddd) dd dd dd", {
        autoclear: false
    });
})();