let hippoCompleted = false;
let kapustaCompleted = false;
let pigsCompleted = false;
let ducksCompleted = false;
let foodCompleted = false;

let chillMouseClicked = false;
let insectHandlersSet = false;

let kapustaClicked = 0;
let pigsClicked = 0;
let ducksClicked = 0;
let insectsClicked = 0;

let highlightingStopped = false;

function closeWindow(e) {
  document.getElementById(e).style.visibility = 'hidden';
}

function show(e) {
  document.getElementById(e).style.visibility = 'visible';
}

function hover(e, d) {
  document.getElementById(e).style.visibility = d == 1 ? 'visible' : 'hidden';
}

function hippo() { // Бегемот, показать конфеты и окрасить в другой цвет
  if (!hippoCompleted) {
    show('windowY');
    const bucket = document.getElementById('bucket');
    bucket.classList.add('button');
    bucket.onclick = ()=>{
      show('candy');
      show('color0');
      show('color1');
      // closeWindow('color3');
      closeWindow('windowY');
      hippoCompleted = true;
      bucket.onclick = null;
      bucket.classList.remove('button');
      unclickable('animal12');
      unclickable('g765');
    };
  }
}


function kapusta() {
  if (!kapustaCompleted) {
    show('window1');
    for (let i = 1; i <=5; ++i) {
      const el = document.getElementById(`kap${i}`);
      el.classList.add('button');
      el.onclick = ()=>{
        kapustaClicked++;
        closeWindow(`kap${i}`);
        if (kapustaClicked == 5) {
          kapustaCompleted = true;
          closeWindow('window1');
          unclickable('animal0');
        }
      };
    }
  }
}

function unclickable(id) {
  const e = document.getElementById(id);
  e.onmouseover = null;
  e.classList.remove('button');
}

function mouse() {
  if (!chillMouseClicked) {
    show('window8');
    document.getElementById('cheese').classList.add('vert-move');
    document.getElementById('rect330').onclick = ()=>{
      closeWindow('window8');
      chillMouseClicked = true;
      unclickable('animal4');
      document.getElementById('cheese').classList.remove('vert-move');
    };
  }
}

function pigs() {
  if (!pigsCompleted) {
    show('window2');
    for (let i = 0; i <=4; ++i) {
      const el = document.getElementById(`pig${i}`);
      el.classList.add('button');
      el.onclick = ()=>{
        pigsClicked++;
        closeWindow(`pig${i}`);
        if (pigsClicked == 5) {
          pigsCompleted = true;
          closeWindow('window2');
          unclickable('animal1');
        }
      };
    }
  }
}

function duck() {
  if (!ducksCompleted) {
    show('windowX');
    for (let i = 0; i < 3; ++i) {
      const duck = document.getElementById(`duck${i}`);
      duck.classList.add('button');
      duck.onclick = () => {
        duck.classList.add(`duck${i}-home`);
        ducksClicked++;
        if (ducksClicked == 3) {
          ducksCompleted = true;
          closeWindow('windowX');
          unclickable('animal13');
          for (let d = 0; d <3; ++d) {
            unclickable(`duck${d}`);
          }
        }
      };
    }
  }
}

function food() {
  if (!foodCompleted) {
    show('window7');
    for (let i = 0; i < 9; ++i) {
      const insect = document.getElementById(`insect${i}`);
      if (!insectHandlersSet) {
        insect.classList.add('anim', 'button');
        insect.onclick = () => {
          insectsClicked++;
          insect.remove();
          if (insectsClicked == 9) {
            foodCompleted = true;
            closeWindow('window7');
            unclickable('animal3');
          }
        };
      }
      insect.style.transform = `translate(${rand(-250, 250)}px, ${rand(-250, 250)}px)`;
    }
    insectHandlersSet = true;
  }
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function info() {
  show('window4');
  if (!highlightingStopped) {
    document.getElementById('highlight').classList.remove('highlight-anim');
    document.getElementById('highlight_2').classList.remove('highlight-anim');
    highlightingStopped = true;
  }
}
