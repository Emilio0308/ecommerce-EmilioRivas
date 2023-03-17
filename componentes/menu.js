function menu() {
    const botonMenu = document.getElementById(`boton_menu`);
    const menu = document.querySelector(`.menu`);
    botonMenu.addEventListener(`click`, () => {
    menu.classList.toggle(`menu_active`);
    });   
}

export default menu