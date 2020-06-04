
(function () {
    const portfolio = document.querySelector('.works');
    const works = portfolio.querySelectorAll('.image-wrapper');
    const hoverTemplate = document.getElementById('workHoverTemplate').innerHTML;

    works.forEach(work =>{
        const photos = work.dataset.photos;
        const hoverBlock = createHoverBlock(photos);
        work.addEventListener('mouseenter', e => {
            work.insertAdjacentElement('beforeend', hoverBlock);
            setTimeout(() => hoverBlock.classList.add('active'), 50);

        });

        work.addEventListener('mouseleave', e => {
            hoverBlock.classList.remove('active');
            setTimeout(() => work.removeChild(hoverBlock), 50);
        });
    });

    function createHoverBlock(photos) {
        const wrapper = document.createElement('div');
        wrapper.className = 'work-hover-block';
        wrapper.innerHTML = hoverTemplate;
        const photosSpan = wrapper.querySelector('.photos');
        photosSpan.innerHTML = photos;
        const btn = wrapper.querySelector('.btn');
        btn.addEventListener('click', e => {
            console.log('Смотреть работу');
        });

        return wrapper;
    }
})();