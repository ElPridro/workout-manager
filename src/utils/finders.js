import { muscleGroups } from "../data/muscleGroups.js";

export function getMuscleById(id) {
    return Object.values(muscleGroups).find(g => g.id === id)
}