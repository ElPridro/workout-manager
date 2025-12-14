document.addEventListener('click', e => {
    const editExerciseBtn = e.target.closest('.edit-exercise');

    if (editExerciseBtn) {
        document.getElementById('confirm-modal')
        .showModal();
    }
})

localStorage.clear();