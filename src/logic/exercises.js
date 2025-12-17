import { openConfirmationModal } from '../ui/components/openConfirmationModal.js';
import { renderExercises } from '../pages/exercisesPage.js';

document.addEventListener('click', e => {
    const editExerciseBtn = e.target.closest('.remove-exercise');

    if (editExerciseBtn) {
        const exerciseCard = editExerciseBtn.closest('.icon-card');
        const exerciseId = exerciseCard.dataset.exerciseId;
        openConfirmationModal({
            title: 'Exercise',
            description: 'This action will permanently delete the exercise. You will not be able to restore it.',
            onclick: () => {

                const isLastWorkout = checkIfLast(getWorkoutByExerciseId(exerciseId).exercises)
                if (isLastWorkout) { 
                    console.log('User is trying to delete last exercise')
                    alert('You cannot delete the last exercise');
                    return
                }

                removeExercise(exerciseId);
            }
        })
    }
})

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

function checkIfLast(array) {
    if (array.length < 2) {
        return true
    }

    return false;
}


// filters an exercise element from the exercises array
function filterExercise(exercisesArray, exerciseId) {
    return exercisesArray.filter(exercise => exercise.id !== exerciseId)
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