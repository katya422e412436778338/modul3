
var current = null;

var state = {
    'head': null,
    'leg': null,
    'body': null
};

function toggleSubmenu(menu, flag=1) {
    if (current) {
        let temp = current;
        current = null;
        toggleSubmenu(temp, 0);
    }

    let visibility = flag == 1 ? "visible" : "hidden";

    let type = menu == 'bodies' ? 'body' : menu.slice(0, -1);
    
    
    document.getElementById('snone').style.visibility = menu == 'heads' ? "hidden" : visibility;
    
    document.getElementById(`${menu}_selected`).style.visibility = visibility;
    
    size = menu != 'legs' ? 5 : 4;

    for (let i = 0; i < size; ++i) {
        document.getElementById(`s${type}${i}`).style.visibility = visibility;
    }
    
    current = menu;
}

function changeState(id) {
    let wanted_state = {}

    if (id != 'snone') {
        
        let element = id.slice(1); //head0, leg0, ...
        let type = element.slice(0, -1); //head, leg, ...

        wanted_state[type] = element;
    } else {
        if (current == 'legs') {
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