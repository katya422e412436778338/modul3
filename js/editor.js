let currentMenu = null;

let state = {
  'head': null,
  'leg': null,
  'body': null,
};

let oldState = Object.assign({}, state);

const emptyState = Object.assign({}, state);

function toggleSubmenu(menu, flag=1) {
  if (currentMenu) {
    const temp = currentMenu;
    currentMenu = null;
    toggleSubmenu(temp, 0);
  }

  const visibility = flag == 1 ? 'visible' : 'hidden';

  const type = menu == 'bodies' ? 'body' : menu.slice(0, -1);


  document.getElementById('snone').style.visibility = menu != 'legs' ? 'hidden' : visibility;

  document.getElementById(`${menu}_selected`).style.visibility = visibility;

  if (menu == 'heads') {
    size = 5;
  } else if (menu == 'bodies') {
    size = 6;
  } else {
    size = 4;
  }

  for (let i = 0; i < size; ++i) {
    document.getElementById(`s${type}${i}`).style.visibility = visibility;
  }

  currentMenu = menu;
}

function changeState(id) {
  const wantedState = {};

  if (id != 'snone') {
    const element = id.slice(1); // head0, leg0, ...
    const type = element.slice(0, -1); // head, leg, ...

    wantedState[type] = element;
  } else {
    if (currentMenu == 'legs') {
      wantedState['leg'] = null;
    } else {
      wantedState['body'] = null;
    }
  }

  render(wantedState);
}

function render(wantedState) {
  for (const key in wantedState) {
    if (state[key]) {
      document.getElementById(state[key]).style.visibility = 'hidden';
    }

    if (wantedState[key]) {
      document.getElementById(wantedState[key]).style.visibility = 'visible';
    }
    state[key] = wantedState[key];
  }
}

function closeLab() {
  if (currentMenu) {
    toggleSubmenu(currentMenu, 0);
  }
  oldState = Object.assign({}, state);
  render(emptyState);
  closeWindow('lab');
}

function showLab() {
  show('lab');
  if (currentMenu) {
    toggleSubmenu(currentMenu, 1);
  }
  state = oldState;
  render(state);
}

function randomAnimal() {
  const state = {
    'head': `head${Math.trunc(rand(0, 4))}`,
    'leg': `leg${Math.trunc(rand(0, 3))}`,
    'body': `body${Math.trunc(rand(0, 5))}`,
  };
  render(state);
}
