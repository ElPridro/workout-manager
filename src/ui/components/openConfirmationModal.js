const dialogEl = document.getElementById('confirm-modal');
const titleEl = document.querySelector('.confirm-modal-title');
const descriptionEl = document.querySelector('.confirm-modal-description');
const cancelBtn = document.querySelector('.confirm-modal-cancel-button');
const removeBtn = document.querySelector('.confirm-modal-remove-button');

let onClickAction = null;

export function openConfirmationModal({title, description, onclick}) {
    titleEl.innerHTML = `Remove <span class="blue-span">${title}</span>`;
    descriptionEl.textContent = description;

    onClickAction = onclick;

    dialogEl.showModal();
}

removeBtn.addEventListener('click', () => {
    onClickAction()
    dialogEl.close();
    onClickAction = null
})

cancelBtn.addEventListener('click', () => {
    dialogEl.close();
    onClickAction = null
})