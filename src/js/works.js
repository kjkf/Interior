
(function () {
    const portfolio = document.querySelector('.works');
    const works = portfolio.querySelectorAll('.image-wrapper');
    const hoverTemplate = document.getElementById('workHoverTemplate').innerHTML;

    const overlay = document.querySelector('.overlay');

    works.forEach(work =>{
        //console.log(work);
        const photos = work.dataset.photos;
        const portfolioNum = work.dataset.portfolio;
        const hoverBlock = createHoverBlock(photos, portfolioNum);
        work.addEventListener('mouseenter', e => {
            work.insertAdjacentElement('beforeend', hoverBlock);
            setTimeout(() => hoverBlock.classList.add('active'), 50);

        });

        work.addEventListener('mouseleave', e => {
            hoverBlock.classList.remove('active');
            setTimeout(() => work.removeChild(hoverBlock), 50);
        });
    });

    function createHoverBlock(photos, portfolioNum) {
        const wrapper = document.createElement('div');
        wrapper.className = 'work-hover-block';
        wrapper.innerHTML = hoverTemplate;
        const photosSpan = wrapper.querySelector('.photos');
        photosSpan.innerHTML = photos;
        const btn = wrapper.querySelector('.btn');

        btn.addEventListener('click', e => {
            console.log('Смотреть работу - ', `portfolio${portfolioNum}`);
            //animateButton(e);
            const portfolioTemplate = document.getElementById(`portfolio${portfolioNum}`).innerHTML;
            overlay.innerHTML = portfolioTemplate;

            overlay.style.display = 'block';
            overlay.style.overflowY = 'auto';
            document.body.style.overflowY = 'hidden';
            overlay.scrollTo(0, 0);

            const phoneBtn = overlay.querySelector('.phone-btn.bubbly-button');
            phoneBtn.addEventListener('click', animateButton, false);

            //console.log($(".portfolio-wrapper .phone-num"));
            $(".portfolio-wrapper .phone-num").mask("+ 996 (ddd) dd dd dd", {
                autoclear: false
            });
        });

        return wrapper;
    }

})();