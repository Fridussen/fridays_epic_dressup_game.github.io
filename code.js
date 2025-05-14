
window.onload = init;

const state = {
    i: 0, // dress index
    j: 0, // shoe index
    k: 0, // hair index
    l: 0  // makeup index
};

function init() {
    updateDress();
    updateShoe();
    updateHair();
    updateMakeup();
}

function nextdress() {
    state.i = (state.i + 1) % 6; // Now includes dress1–dress6
    updateDress();
}

function nextshoe() {
    state.j = (state.j + 1) % 6; // Now includes shoe1–shoe6
    updateShoe();
}

function nexthair() {
    state.k = (state.k + 1) % 4; // Now includes hairfront1–hairfront4
    updateHair();
}

function nextmakeup() {
    state.l = (state.l + 1) % 7; // Now includes makeup1–makeup7
    updateMakeup();
}

function updateDress() {
    const dress = document.getElementById("clothes");
    dress.className = "";
    dress.classList.add(`dress${state.i + 1}`);
}

function updateShoe() {
    const shoe = document.getElementById("shoes");
    shoe.className = "";
    shoe.classList.add(`shoe${state.j + 1}`);
}

function updateHair() {
    const hairf = document.getElementById("hairfront");
    hairf.className = "";
    hairf.classList.add(`hairfront${state.k + 1}`);
}

function updateMakeup() {
    const makeup = document.getElementById("makeup");
    makeup.className = "";
    makeup.classList.add(`makeup${state.l + 1}`);
}
