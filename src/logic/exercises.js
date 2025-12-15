document.addEventListener('click', e => {
    const editExerciseBtn = e.target.closest('.remove-exercise');

    if (editExerciseBtn) {
        document.getElementById('confirm-modal')
        .showModal();
    }
})