
(function () {
    const container = document.querySelector('.before-after-container');
    const control = container.querySelector('.controls');
    const imageAfter = container.querySelector('.imageAfter');

    control.onmousedown = function(event) {
        event.preventDefault(); // предотвратить запуск выделения (действие браузера)

        let shiftX = event.clientX - control.getBoundingClientRect().left;
        // shiftY здесь не нужен, слайдер двигается только по горизонтали

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(event) {
            let newLeft = event.clientX - shiftX - container.getBoundingClientRect().left;

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

        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }

    };

    control.ondragstart = function() {
        return false;
    };
})();