import { getExerciseById } from "../../utils/finders.js";

// Exercise editor dialog (containing everything)
const dialogEl = document.querySelector('.exercise-editor');

// Dialog content
const dialogContent = dialogEl.querySelector('.editor-content')


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

let newTargetMuscle = null;
let onClickAction = null;

    // Opening muscle group selection
    if (trigger) {
    trigger.addEventListener('click', () => {
        dropdown.classList.toggle('open');
    })
    }

    // Closing dropdown when option is selected & updating tiggerValue to the selected option
    if(options) {
    options.forEach(option => {
        option.addEventListener('click', () => {

            // Removes the class 'selected' from every single option
            removeClass({nodeList: options, className: 'selected'})

            // Adds the class 'selected' to the option that was clicked
            option.classList.add('selected');

            // Updates the value of the trigger to the value dataset stored in the clicked option
            // (It still dispays the id of the mucle instead of the muscule name.. That needs to be fixed in V2)
            newTargetMuscle = option.dataset.value
            value.textContent = newTargetMuscle;

            // Closes the dropdown the moment an option is clicked
            dropdown.classList.remove('open');
        })
    })
    }


export function openExerciseEditor({id, type, onClick}) {
    if (!dialogEl) return;

    // Removes the 'selected' class from all the options
    if (options) {
    removeClass({nodeList: options, className: 'selected'})
    }

    newTargetMuscle = null;

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

        value.textContent = exerciseData.targetMuscle;

        // Loops through the options array to find the option with a value matching the exerciseData.value;
        const selectedOption = Array.from(options).find(option => option.dataset.value === exerciseData.targetMuscle)

        if (!newTargetMuscle) {
            newTargetMuscle = exerciseData.targetMuscle;
        }
        
        // If it finds it it adds the class 'selected' to it.
        if (selectedOption) selectedOption.classList.add('selected')
        
        // Opening modal
        dialogEl.showModal();
    }

    onClickAction = onClick;
}

function removeClass({nodeList, className}) {
    nodeList.forEach(element => element.classList.remove(className));
}


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

export function getNewExerciseData() {
    return {
        name: exerciseNameInput.value,
        sets: setsInput.value,
        minReps: minRepsInput.value,
        maxReps: maxRepsInput.value,
        targetMuscle: newTargetMuscle
    }
}

document.addEventListener('click', e => {

    // Closes dialog if it detects a click from the outsides
    if (!dialogContent.contains(e.target)) {
        dialogEl.close();
    }

    // Closes the musclegroup selection if user clicks outside the dropdown
    if (!muscleGroupSelection.contains(e.target)) {
        dropdown.classList.remove('open');
    }

    if (e.target.classList.contains('save-exercise-button')) {
        onClickAction();
        dialogEl.close();
    }
})

