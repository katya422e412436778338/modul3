var zoomable = document.getElementById('map');
var zX = 0.6;
window.addEventListener('wheel', function (e) {
    zX += (e.deltaY > 0) ? -0.1 : 0.1;
    if (!(zoomable.style.transform == 'scale(0.1)' && zX <= 0.1))
        zoomable.style.transform = 'scale(' + zX + ')';
});