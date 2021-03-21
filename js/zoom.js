$(document).ready(function() {

  document.getElementById('map').scrolling = "no";
  new ScrollZoom($('#map'), 5, 0.25);
});

function ScrollZoom(container, maxScale, factor) {
  const target = container.children().first();
  const size = {w: target.width(), h: target.height()};
  const pos = {x: 0, y: 0};
  const zoomTarget = {x: 0, y: 0};
  const zoomPoint = {x: 0, y: 0};
  let scale = 1;
  target.css('transform-origin', '0 0');
  target.on('mousewheel DOMMouseScroll', scrolled);

  function scrolled(e) {
    if (e.ctrlKey) {
    const offset = container.offset();
    zoomPoint.x = e.pageX - offset.left;
    zoomPoint.y = e.pageY - offset.top;

    e.preventDefault();
    let delta = e.delta || e.originalEvent.wheelDelta;
    if (delta === undefined) {
      // we are on firefox
      delta = e.originalEvent.detail;
    }
    delta = Math.max(-1, Math.min(1, delta)); // cap the delta to [-1,1] for cross browser consistency

    // determine the point on where the slide is zoomed in
    zoomTarget.x = (zoomPoint.x - pos.x)/scale;
    zoomTarget.y = (zoomPoint.y - pos.y)/scale;

    // apply zoom
    scale += delta*factor * scale;
    scale = Math.max(1, Math.min(maxScale, scale));
    console.log(scale);

    // calculate x and y based on zoom
    pos.x = -zoomTarget.x * scale + zoomPoint.x;
    pos.y = -zoomTarget.y * scale + zoomPoint.y;


    // Make sure the slide stays in its container area when zooming out
    if (pos.x>0) {
      pos.x = 0;
    }
    if (pos.x+size.w*scale<size.w) {
      pos.x = -size.w*(scale-1);
    }
    if (pos.y>0) {
      pos.y = 0;
    }
    if (pos.y+size.h*scale<size.h) {
      pos.y = -size.h*(scale-1);
    }

    update();
    } 
  }

  function update() {
    target.css('transform', 'translate('+(pos.x)+'px,'+(pos.y)+'px) scale('+scale+','+scale+')');
  }
}
