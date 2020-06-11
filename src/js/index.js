
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
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {

            form.addEventListener('submit', function(event) {
                if ((form.checkValidity() === false)){
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    /* if (form.getAttribute('id') === "price_form") {

                     }*/
                }
                form.classList.add('was-validated');
            }, false);

        });

    }, false);

    $(".phone-num").mask("+ 996 (ddd) dd dd dd", {
        autoclear: false
    });
})();