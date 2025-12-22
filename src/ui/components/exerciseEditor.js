import { getExerciseById } from "../../utils/finders.js";

// Exercise editor dialog (containing everything)
const dialogEl = document.querySelector('.exercise-editor');

// Dialog title
const titleEl = dialogEl.querySelector('.editor-title');

// Exercise name input
const exerciseNameInput = dialogEl.querySelector('#exercise-name');

// Select muscle group
const muscleGroupSelection = document.querySelector('.muscle-group-select');
const dropdown = muscleGroupSelection.querySelector('.muscle-group-dropdown')
const trigger = muscleGroupSelection.querySelector('.muscle-group-trigger');
const value = muscleGroupSelection.querySelector('.muscle-group-value');
const options = muscleGroupSelection.querySelectorAll('.muscle-group-option');

// Sets amount input
const setsInput = dialogEl.querySelector('#sets');

// Min reps amount input
const minRepsInput = dialogEl.querySelector('#min-reps');

// Max reps amount input
const maxRepsInput = dialogEl.querySelector('#max-reps')

// Save button
const saveBtn = dialogEl.querySelector('#save-exercise-button');


export function openExerciseEditor({id, type}) {
    if (!dialogEl) return;

    if (type === 'edit') {
        titleEl.innerHTML = `Edit <span class="blue-span">Exercise</span>`
        const exerciseData = getExerciseData(id);

        if (!exerciseData) {
            console.error(`Unable to extract exercise data: Exercise(${id}) not found`);
            return;
        }
        
        // Filling the data in of the selected exercise
        exerciseNameInput.value = exerciseData.name;
        setsInput.value = exerciseData.sets;
        minRepsInput.value = exerciseData.minReps;
        maxRepsInput.value = exerciseData.maxReps;

        // Opening muscle group selection
        trigger.addEventListener('click', () => {
            dropdown.classList.toggle('open');
        })

        // Closing dropdown when option is selected
        options.forEach(option => {
            option.classList.remove('selected');
            option.addEventListener('click', () => {
                option.classList.add('selected');
                dropdown.classList.remove('open');
                value.textContent = option.dataset.value;
            })
        })

        // Opening modal
        dialogEl.showModal();
    }

}

document.addEventListener('click', e => {
    if (!muscleGroupSelection.contains(e.target)) {
        dropdown.classList.remove('open')
    }
})

function getExerciseData(id) {
    const exercise = getExerciseById(id);
    return {
        name: exercise.name,
        sets: exercise.sets,
        minReps: exercise.minReps,
        maxReps: exercise.maxReps,
        targetMuscle: exercise.targetMuscle
    }
}