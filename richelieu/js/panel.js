/* codigo para la lista de niveles */

const panels = document.querySelectorAll('.panel');

function togglePanel() {
  this.classList.toggle('active');
}

panels.forEach(panel => {
  panel.addEventListener('click', togglePanel);
});

/* codigo para la lista de niveles */
let collapsibles = document.querySelectorAll('.curso-container')

collapsibles.forEach(element => {
    element.addEventListener("click", () =>{
        element.querySelector('.curso-cont').classList.toggle('open');
        element.querySelector('.titulo').classList.toggle('active');
        element.querySelector('.arrow-container').classList.toggle('up');
    })
});