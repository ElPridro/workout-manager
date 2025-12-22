import { openConfirmationModal } from '../../ui/components/openConfirmationModal.js';
import { renderExercises } from '../../pages/exercisesPage.js';
import { displayTopError } from '../../ui/components/displayTopError.js';

// Edit/add exercise modal 
import { openExerciseEditor,  getNewExerciseData} from '../../ui/components/exerciseEditor.js';

import { getExerciseById } from '../../utils/finders.js';
import { programs, savePrograms } from '../../storage/storage.js';

let newExerciseData = {};

document.addEventListener('click', e => {
    const removeExerciseBtn = e.target.closest('.remove-exercise');
    const editExerciseBtn = e.target.closest('.edit-exercise');

        if (editExerciseBtn) {
            const exerciseCard = editExerciseBtn.closest('.icon-card');
            const exerciseId = exerciseCard.dataset.exerciseId;
            openExerciseEditor({
                id: exerciseId,
                type: 'edit',
                onClick: () => {
                    newExerciseData = getNewExerciseData()
                    editExercise(exerciseId)
                }
            })
        }

        if (removeExerciseBtn) {
            const exerciseCard = removeExerciseBtn.closest('.icon-card');
            const exerciseId = exerciseCard.dataset.exerciseId;

            openConfirmationModal({
                title: 'exercise',
                description: 'This action will permanently delete the exercise. You will not be able to restore it.',
                onclick: () => handleExerciseRemoval(exerciseId)
            })
        }

})

function handleExerciseRemoval(id) {
    const parentWorkout = getWorkoutByExerciseId(id);

    if (!parentWorkout) {
        console.log(`invariant violation: workout not found for exercise ${id}`);
        return
    }

    const isLastWorkout = parentWorkout.exercises.length < 2
    if (isLastWorkout) {
        displayTopError('At least one exercise is required.')
        return
    }

    removeExercise(id)
}

function getWorkoutByExerciseId(id) {
    const programs = JSON.parse(localStorage.getItem('programs'))


    for (const program of programs) {
        for (const workout of program.workouts) {
            const foundWorkout = workout.exercises.some(exercise => exercise.id === id);

            if (foundWorkout) {
                return workout;
            }
        }
    }

}


// filters an exercise element from the exercises array
function filterExercise(exercisesArray, exerciseId) {
    return exercisesArray.filter(exercise => exercise.id !== exerciseId)
}

// Updatex the program Array with the new adjusted exercise and saves to localStorge and renders UI accordingly
function editExercise(id) {
    const selectedExercise = getExerciseById(id);

    console.log(selectedExercise.id)
    selectedExercise.name = newExerciseData.name;
    selectedExercise.sets = newExerciseData.sets;
    selectedExercise.minReps = newExerciseData.minReps;
    selectedExercise.maxReps = newExerciseData.maxReps;
    selectedExercise.targetMuscle = newExerciseData.targetMuscle;

    localStorage.setItem('programs', JSON.stringify(programs));
    renderExercises();
}


// Updates the exercises in a single workout using filterExercise()
function updateWorkout(workoutObject, exerciseId) {

    return {
        ...workoutObject,
        exercises: filterExercise(workoutObject.exercises, exerciseId)
    }

}

// Updates the entire workoutsArray with the modified workout object we get from updateWorkout();
function updateWorkouts(workoutsArray, exerciseId) {
    return workoutsArray.map(workout => {
        return updateWorkout(workout, exerciseId)
    })
}

// Updates the workouts array in a single program using updateWorkouts()
function updateProgram(programObject, exerciseId) {
        return {
            ...programObject, 
            workouts: updateWorkouts(programObject.workouts, exerciseId)
        }
}


// Updates the programs array with the modified program object we get from updateProgram();
function updatePrograms(programsArray, exerciseId) {
    return programsArray.map(program => updateProgram(program, exerciseId))
}


// Updates localStorage with the new program and renders the ui accordingly
function removeExercise(id) {
    const userPrograms = JSON.parse(localStorage.getItem('programs'))

    localStorage.setItem('programs', JSON.stringify(updatePrograms(userPrograms, id)));
    renderExercises()
}
