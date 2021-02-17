var zoomable = document.getElementById('map');
var zX = 0.6;
window.addEventListener('wheel', function (e) {
    console.log(e);
    zX += (e.deltaY > 0) ? -0.1 : 0.1;
    zoomable.style.transform = 'scale(' + zX + ')';
});