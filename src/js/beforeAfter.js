
(function () {
    const container = document.querySelector('.before-after-container');
    const control = container.querySelector('.controls');
    const imageAfter = container.querySelector('.imageAfter');
    let shiftX;
    const md = new MobileDetect(window.navigator.userAgent);
    const isMobile = md.mobile();
    control.onmousedown = function(event) {
        event.preventDefault(); // предотвратить запуск выделения (действие браузера)

        shiftX = event.clientX - control.getBoundingClientRect().left;
        // shiftY здесь не нужен, слайдер двигается только по горизонтали

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }

    };

    function onMouseMove(event) {
        const clientX = isMobile ? event.touches[0].clientX : event.clientX;
        let newLeft = clientX - shiftX - container.getBoundingClientRect().left;

        // курсор вышел из слайдера => оставить бегунок в его границах.
        if (newLeft < -(control.offsetWidth/2)) {
            newLeft = -(control.offsetWidth/2);
        }
        let rightEdge = container.offsetWidth - control.offsetWidth/2;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        control.style.left = newLeft + 'px';
        imageAfter.style.width = `${newLeft + 24}px`;
    }

    control.ondragstart = function() {
        return false;
    };

    //console.log(isMobile);
    if (isMobile) {
        control.ontouchstart = function(event) {
            event.preventDefault(); // предотвратить запуск выделения (действие браузера)

            shiftX = event.touches[0].clientX - control.getBoundingClientRect().left;
            // shiftY здесь не нужен, слайдер двигается только по горизонтали

            document.addEventListener('touchmove', onMouseMove);
            document.addEventListener('touchend', onMouseUp);

            function onMouseUp() {
                document.removeEventListener('touchend', onMouseUp);
                document.removeEventListener('touchmove', onMouseMove);
            }

        };
    }

})();