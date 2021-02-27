dragElement(document.getElementById('map')); //Перемещение "как по карте". Украдено из интернета.

function dragElement(el) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(el.id + "header")) {
        document.getElementById(el.id + "header").onmousedown = dragMouseDown;
    } else {
        el.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag; 
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        el.style.top = (el.offsetTop - pos2) + "px";
        el.style.left = (el.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function closeWindow(e) {
    for (i = 0; i < e.length; i++)
        document.getElementById(e[i]).style.visibility = "hidden";
}

function hover(e, d){
    console.log(e,d);
    document.getElementById(e).style.visibility = d == 1 ? "visible" : "hidden"; 
    console.log(document.getElementById(e).style.visibility);
    console.log(document.getElementById(e));
}