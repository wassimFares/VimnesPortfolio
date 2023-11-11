let iframe = document.querySelectorAll("#my-iframe");
console.log(iframe);
iframe.forEach(function (element){
    let width = element.offsetWidth;
    let newHeight = (width * 9) / 16;
    element.style.height = newHeight + "px";
});



document.addEventListener('DOMContentLoaded', function () {
    let divs = document.querySelectorAll('div');

    divs.forEach(function (element) {
        if (element.id !== 'main' && element.id !== 'sss') {
            element.classList.add('lazy-load');
        }
    });
    let hidden = document.querySelectorAll('.lazy-load');
    function checkVisibility() {
        hidden.forEach(function (element) {
            let boundingBox = element.getBoundingClientRect();
            if (boundingBox.top < window.innerHeight && boundingBox.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    }

    checkVisibility();

    window.addEventListener('scroll', checkVisibility);
});
