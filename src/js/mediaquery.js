
(function () {
    const works = document.querySelector('.works');
    const algorithm = document.querySelector('.algorithm-step-in');
    let workSlider, algorithmSlider;

    const mql1200 = window.matchMedia("(max-width: 1200px)");
    const mql768 = window.matchMedia("(max-width: 768px)");
    const mql992 = window.matchMedia("(max-width: 992px)");
    const mql576 = window.matchMedia("(max-width: 576px)");

    function handlerForMediaQueries(x) {
        if (mql768.matches) { // If media query matches
            //console.log('mql768.matches');
            createWorkSlider();
            createAlgorithmSlider();
        } else {
            //console.log('mql768.matches else');
            destroyWorkSlider();
            destroyAlgorithmSlider();
        }
    }

    function createAlgorithmSlider() {
        const items = algorithm.querySelectorAll('.item');
        algorithm.classList.remove('algorithm-step-in');
        const wrapper = document.createElement('div');
        let discountItem, brItem;
        wrapper.className = 'algorithm-slider';
        items.forEach(item => {
            if (item.classList.contains('algorithm-discount')) {
                discountItem = item;
            } else if (item.classList.contains('algorithm-step-item--br')) {
                brItem = item;
            } else {
                wrapper.insertAdjacentElement('beforeend', item);
            }
        });
        algorithm.innerHTML = '';
        algorithm.insertAdjacentElement('beforeend', wrapper);
        algorithm.insertAdjacentElement('beforebegin', discountItem);
        algorithm.insertAdjacentElement('afterend', brItem);

        algorithmSlider = initiateSlider('.algorithm-slider');
    }

    function destroyAlgorithmSlider() {
        const items = algorithm.querySelectorAll('.item[id]');
        const discountItem = document.querySelector('.item.algorithm-discount');
        const brItem = document.querySelector('.item.algorithm-step-item--br');

        if (algorithmSlider) algorithmSlider.destroy();
        algorithm.innerHTML = '';
        algorithm.classList.add('algorithm-step-in');

        items.forEach((item, index) => {
            algorithm.insertAdjacentElement('beforeend', item);
            if (index === 1) {
                algorithm.insertAdjacentElement('beforeend', discountItem);
            }
        });

        algorithm.insertAdjacentElement('beforeend', brItem);
    }


    function createWorkSlider() {
        const items = works.querySelectorAll('.image-wrapper');
        const wrapper = document.createElement('div');
        wrapper.className = 'works-slider';
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'slider-item';
            const className = item.classList.value.match(/col-md-\d/);
            item.classList.remove(className);
            //console.log(item);
            div.insertAdjacentElement('beforeend', item);
            wrapper.insertAdjacentElement('beforeend', div);
        });
        works.innerHTML = '';
        works.insertAdjacentElement('beforeend', wrapper);

        workSlider = initiateSlider('.works-slider');
    }

    function destroyWorkSlider() {
        const items = works.querySelectorAll('.slider-item[id] .image-wrapper');
        if (workSlider) workSlider.destroy();
        works.innerHTML = '';
        let row1 = createRow();
        let row2 = createRow();
        let row3 = createRow();
        let row4 = createRow();
        items.forEach((item) => {
            if (item.classList.contains('row1')) {
                item.classList.add('col-md-4');
                row1.insertAdjacentElement('beforeend', item);
            } else if (item.classList.contains('row2')) {
                item.classList.add('col-md-6');
                row2.insertAdjacentElement('beforeend', item);
            } else if (item.classList.contains('row3')) {
                const className = item.classList.contains('bottom-right') ? 'col-md-8' : 'col-md-4';
                item.classList.add(className);
                row3.insertAdjacentElement('beforeend', item);
            } else if (item.classList.contains('row4')) {
                item.classList.add('col-md-4');
                row4.insertAdjacentElement('beforeend', item);
            }

        });
        works.insertAdjacentElement('beforeend', row1);
        works.insertAdjacentElement('beforeend', row2);
        works.insertAdjacentElement('beforeend', row3);
        works.insertAdjacentElement('beforeend', row4);
    }

    function createRow() {
        let row = document.createElement('div');
        row.className = 'row';
        return row;
    }

    function initiateSlider(selector) {
        return tns({
            container: selector,
            items: 1,
            "mouseDrag": true,
            "slideBy": "page",
            "speed": 400,
            //'autoplay': true,
            navPosition: 'bottom',
            nav: true,
            controls: false
        });
    }

    const windowInner = window.visualViewport ? window.visualViewport.width : window.innerWidth;
    //console.log(windowInner, window.innerWidth);
    if (windowInner <= 768) {
        handlerForMediaQueries();
    }

    try {
        // Chrome & Firefox
        mql768.addEventListener("change", () => {
            handlerForMediaQueries();
        });
    } catch (e1) {
        try {
            // Safari
            /*darkMediaQuery.addListener((e) => {
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            });*/
            mql768.addListener((e) => {
                handlerForMediaQueries();
                //alert('inside');
            });
        } catch (e2) {
            console.error(e2);
        }
    }
})();