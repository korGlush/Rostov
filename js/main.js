document.addEventListener("DOMContentLoaded", function (event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector ('.modal__close')
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
    });
    
    closeBtn.addEventListener('click', switchModal)

    document.addEventListener('click', (e) => {
        if (e.target.classList === modal.classList) {
            modal.classList.toggle('modal--visible');
        };
    });
    
    document.addEventListener('keydown', (e) => {
        if(e.key == 'Escape') {
            if (modal.classList.contains('modal--visible')) {
                modal.classList.toggle('modal--visible');
            };
        };
    });

})