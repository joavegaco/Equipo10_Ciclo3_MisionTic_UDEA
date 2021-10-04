const open = document.getElementById('open_edition');
const close = document.getElementById('close');
const modalContainer = document.getElementById('Contenedor_Pop_Up');
const editData = document.getElementById('safe_changes');

open.addEventListener('click', () => {
    modalContainer.classList.add('show');

})

close.addEventListener('click', () => {
    modalContainer.classList.remove('show');

})
// Recomiendo que cuando se junte el Front con el Back se ponga una función que genere un ID para cada rol que esté en la BD.