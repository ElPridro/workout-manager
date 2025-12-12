import { programs } from '../storage/storage.js';
import { muscleGroups } from '../data/muscleGroups.js';

function getWorkoutId() {
    const param = new URLSearchParams( window.location.search );

    return param.get('id')
}

function getWorkoutById() {
    const workoutId = getWorkoutId();

    for (const program of programs) {

        for (const workout of program.workouts) {

            if (workout.id === workoutId) {

                return workout
            }
        }
    }
}



function getHtmlString() {

    const workout = getWorkoutById()

    let html = '';
    workout.exercises.forEach( ex => {

        const targetIcon = Object.values(muscleGroups)
        .find(group => group.id === ex.targetMuscle).icon;

        html += `
            <div class="icon-card">
                <img src="${targetIcon}" alt="icon showing target muscle">
                <div class="exercise-details">
                    <h2>${ex.name}</h2>

                    <div class="card-menu-wrapper">
                        <i class="fa-solid fa-ellipsis-vertical menu-trigger"></i>
                
                        <div class="card-menu-dropdown">
                
                            <button class="card-menu-item">
                                <i class="fa-solid fa-pencil"></i>
                                <span>Edit</span>
                            </button>
                
                            <div class="menu-divider"></div>
                
                            <button class="card-menu-item danger">
                                <i class="fa-solid fa-trash danger"></i>
                                <span>Remove</span>
                            </button>
                
                        </div>
                    </div>

                    <ul>
                        <li><span>${ex.sets} × ${ex.minReps} - ${ex.maxReps}</span></li>
                    </ul>
                </div>
            </div>
        `
    })

    return html
}

function renderExercises() {
 
    const html = getHtmlString();

    // Render page title
    document.getElementById('exercises-heading')
    .innerHTML = `${getWorkoutById().name} <span>exercises</span>`
    
    // Render exercises
    document.querySelector('.exercises-wrapper')
    .innerHTML = html

    // Render back button
    document.querySelector('.back-to-workout')
    .innerHTML = `<a href="${document.referrer}" class="default-button">Back to workouts</a>`
}


renderExercises()