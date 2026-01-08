import { muscleGroups } from "../data/muscleGroups.js";
import { programs } from "../storage/storage.js"


export function getMuscleById(id) {
    return Object.values(muscleGroups).find(g => g.id === id)
}

export function getExerciseById(id) {
    return programs.flatMap(program => program.workouts)
    .flatMap(workout => workout.exercises)
    .find(exercise => exercise.id === id);
}

export function getWorkoutById(id) { 
    return programs.flatMap(program => program.workouts)
    .find(workout => workout.id === id)
}