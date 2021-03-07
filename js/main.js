var hippo_completed = false;
var kapusta_completed = false;
var pigs_completed = false;
var ducks_completed = false;

var chill_mouse_clicked = false;

var kapusta_clicked = 0;
var pigs_clicked = 0;
var ducks_clicked = 0;

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
    document.getElementById(e).style.visibility = "hidden";
}

function show(e) {
    document.getElementById(e).style.visibility = "visible";
}

function hover(e, d){
    document.getElementById(e).style.visibility = d == 1 ? "visible" : "hidden"; 
}

function hippo() { //Бегемот, показать конфеты и окрасить в другой цвет
    if (!hippo_completed) {
        show('windowY');
        var bucket = document.getElementById('bucket');
        bucket.classList.add('button');
        bucket.onclick = ()=>{
            show('candy');
            show('color0');
            show('color1');
            // closeWindow('color3');
            closeWindow('windowY');
            hippo_completed = true;
            bucket.onclick = null;
            bucket.classList.remove('button');
            unclickable('animal12');
        }
    }
}



function kapusta() {
    if (!kapusta_completed) {
        show('window1');
        for (let i = 1; i <=5; ++i) {
            let el = document.getElementById(`kap${i}`);
            el.classList.add('button');
            el.onclick = ()=>{
                kapusta_clicked++;
                closeWindow(`kap${i}`);
                if (kapusta_clicked == 5) {
                    kapusta_completed = true;
                    closeWindow('window1');
                    unclickable('animal0');
                }
            }
        }
    }
}

function unclickable(id) {
    let e = document.getElementById(id);
    e.onmouseover = null;
    e.classList.remove('button');
}

function mouse() {
    if (!chill_mouse_clicked) {
        show('window8');
        document.getElementById('cheese').classList.add('vert-move');
        document.getElementById('rect330').onclick = ()=>{
            closeWindow('window8');
            chill_mouse_clicked = true;
            unclickable('animal4');
            document.getElementById('cheese').classList.remove('vert-move');
        }
    }
}

function pigs() {
    if (!pigs_completed) {
        show('window2');
        for (let i = 0; i <=4; ++i) {
            let el = document.getElementById(`pig${i}`);
            el.classList.add('button');
            el.onclick = ()=>{
                pigs_clicked++;
                closeWindow(`pig${i}`);
                if (pigs_clicked == 5) {
                    pigs_completed = true;
                    closeWindow('window2');
                    unclickable('animal1');
                }
            }
        }
    }
}

function duck() {
    if (!ducks_completed) {
        show('windowX');
        for (let i = 0; i < 3; ++i) {
            let duck = document.getElementById(`duck${i}`);
            duck.classList.add('button');
            duck.onclick = () => {
                duck.classList.add(`duck${i}-home`);
                ducks_clicked++;
                if (ducks_clicked == 3) {
                    ducks_completed = true;
                    closeWindow('windowX');
                    unclickable('animal13');
                }
            }
        }
    }
}