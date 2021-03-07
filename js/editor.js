
var currentMenu = null;

var state = {
    'head': null,
    'leg': null,
    'body': null
};

var oldState = Object.assign({}, state);

var emptyState = Object.assign({}, state);

function toggleSubmenu(menu, flag=1) {
    if (currentMenu) {
        let temp = currentMenu;
        currentMenu = null;
        toggleSubmenu(temp, 0);
    }

    let visibility = flag == 1 ? "visible" : "hidden";

    let type = menu == 'bodies' ? 'body' : menu.slice(0, -1);
    
    
    document.getElementById('snone').style.visibility = menu != 'legs' ? "hidden" : visibility;
    
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
    let wanted_state = {}

    if (id != 'snone') {
        
        let element = id.slice(1); //head0, leg0, ...
        let type = element.slice(0, -1); //head, leg, ...

        wanted_state[type] = element;
    } else {
        if (currentMenu == 'legs') {
            wanted_state['leg'] = null;
        } else {
            wanted_state['body'] = null;
        }
    }
    
    render(wanted_state);
}

function render(wanted_state) {
    for (let key in wanted_state) {
        if (state[key]) {
            document.getElementById(state[key]).style.visibility = "hidden";
        }

        if (wanted_state[key])
            document.getElementById(wanted_state[key]).style.visibility = "visible";
        state[key] = wanted_state[key];
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