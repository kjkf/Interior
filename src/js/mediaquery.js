
(function () {
    const works = document.querySelector('.works');
    let workSlider;

    const mql1200 = window.matchMedia("(max-width: 1200px)");
    const mql768 = window.matchMedia("(max-width: 768px)");
    const mql992 = window.matchMedia("(max-width: 992px)");
    const mql576 = window.matchMedia("(max-width: 576px)");

    function handlerForMediaQueries(x) {
        if (mql768.matches) { // If media query matches
            //console.log('mql768.matches');
            createWorkSlider();
        } else {
            //console.log('mql768.matches else');
            destroyWorkSlider();
        }
    }

    function createWorkSlider() {
        const items = works.querySelectorAll('.image-wrapper');
        const wrapper = document.createElement('div');
        wrapper.className = 'works-slider';
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'slider-item';
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
                row1.insertAdjacentElement('beforeend', item);
            } else if (item.classList.contains('row2')) {
                row2.insertAdjacentElement('beforeend', item);
            } else if (item.classList.contains('row3')) {
                row3.insertAdjacentElement('beforeend', item);
            } else if (item.classList.contains('row4')) {
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