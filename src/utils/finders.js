import { muscleGroups } from "../data/muscleGroups.js";
const programs = localStorage.getItem('programs');

export function getMuscleById(id) {
    return Object.values(muscleGroups).find(g => g.id === id)
}

export function getExerciseById(id) {
    return programs.flatMap(program => program.workouts)
    .flatMap(workout => workout.exercises)
    .find(exercise => exercise.id === id);
}

