import { getExerciseById } from "../../utils/finders";

// Exercise editor dialog (containing everything)
const dialogEl = document.querySelector('.exercise-editor');

// Dialog title
const titleEl = dialogEl.querySelector('.editor-title');

// Exercise name input
const exerciseNameInput = dialogEl.getElementById('exercise-name');

// Select muscle group
const dropdown = document.querySelector('.muscle-group-select');
const trigger = dropdown.querySelector('.muscle-group-trigger');
const value = dropdown.querySelector('.muscle-group-value');
const options = dropdown.querySelectorAll('.muscle-group-option');

// Sets amount input
const setsInput = dialogEl.getElementById('sets');

// Min reps amount input
const minRepsInput = dialogEl.getElementById('min-reps');

// Max reps amount input
const maxRepsInput = dialogEl.getElementById('max-reps')

// Save button
const saveBtn = dialogEl.getElementById('save-exercise-button');


function openExerciseEditor({id, type}) {
    if (!dialogEl) return;

    if (type === 'edit') {
        const exerciseData = getExerciseData(id);

        if (!exerciseData) {
            console.error(`Unable to extract exercise data: Exercise(${id}) not found`)
            return;
        }
        
        // Filling the data in of the selected exercise
        exerciseNameInput.value = exerciseData.name;
        setsInput.value = exerciseData.sets;
        minRepsInput.value = exerciseData.minReps;
        maxRepsInput.value = exerciseData.maxReps;

    }
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