import { programs } from '../data/programs.js';
import { muscleGroups } from '../data/muscleGroups.js';

function getHtmlTemplate() {
    let htmlTemplate = '';
    for (const program of programs) {

        const isActiveClass = program.isActive ? '' : 'hidden' 

        const focusedMuscleGroups = [];
        for ( const group of program.focusedMuscleGroups) {
            focusedMuscleGroups.push(group.name)
        }

        htmlTemplate += `<div class="program-card banner-card">
                                <p class="is-active ${isActiveClass}">Active</p>
                                <h2>${program.name}</h2>

                                <div class="card-menu-wrapper">
                                    <i class="fa-solid fa-ellipsis-vertical menu-trigger"></i>

                                    <div class="card-menu-dropdown">

                                        <button class="card-menu-item">
                                            <i class="fa-solid fa-pencil"></i>
                                            <span>Edit</span>
                                        </button>

                                        <button class="card-menu-item">
                                            <i class="fa-solid fa-star"></i>
                                            <span>Make Active</span>
                                        </button>

                                        <div class="menu-divider"></div>

                                        <button class="card-menu-item danger">
                                            <i class="fa-solid fa-trash danger"></i>
                                            <span>Remove</span>
                                        </button>

                                    </div>
                                </div>

                                <ul>
                                    <li>${program.workouts.length} Workouts a week</li>
                                    <li>${focusedMuscleGroups.join(', ')}</li>
                                </ul>
                            </div>`
    }

    return htmlTemplate
}

function render() {
    const html = getHtmlTemplate();
    const programsContainer = document.getElementById('programs-container');
    
    programsContainer.innerHTML = html
}

render();