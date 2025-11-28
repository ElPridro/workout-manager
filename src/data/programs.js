import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import { muscleGroups } from './muscleGroups'

export const programs = [
    {
        id: uuidv4(),
        name: 'push Power',
        focusedMuscleGroups: [muscleGroups.CHEST, muscleGroups.SHOULDERS],
        isActive: false,

        workouts: [
            {
                id: uuidv4(),
                name: 'Back & Triceps',
                durationInHours: 1,
                durationInMinutes: 0,
                targetMuscleGroups: [muscleGroups.BACK, muscleGroups.TRICEPS],

                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Lats pull down',
                        sets: 4,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BACK
                    },

                    {
                        id: uuidv4(),
                        name: 'Cable Row Machine',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BACK
                    },

                    {
                        id: uuidv4(),
                        name: 'Lower Back Machine',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.CORE
                    },

                    {
                        id: uuidv4(),
                        name: 'Triceps Pushdown',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.TRICEPS
                    },

                    {
                        id: uuidv4(),
                        name: 'Skull Crushers',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.TRICEPS
                    },
                ]
            },

            {
                id: uuidv4(),
                name: 'Chest & Biceps',
                durationInHours: 1,
                durationInMinutes: 10,
                targetMuscleGroups: [muscleGroups.CHEST, muscleGroups.BICEPS],

                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Flat Bench Press Machine',
                        sets: 3,
                        minReps: 6,
                        maxReps: 8,
                        targetMuscle: muscleGroups.CHEST
                    },

                    {
                        id: uuidv4(),
                        name: 'Incline Bench Press',
                        sets: 4,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.CHEST
                    },

                    {
                        id: uuidv4(),
                        name: 'Pec Fly Machine',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.CHEST
                    },

                    {
                        id: uuidv4(),
                        name: 'Cable Bicep Curl',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.BICEPS
                    } ,

                    {
                        id: uuidv4(),
                        name: 'Preacher Curl Machine',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.BICEPS
                    },

                    {
                        id: uuidv4(),
                        name: 'Hammer Curls',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BICEPS
                    }
                ]
            },

            {
                id: uuidv4(),
                name: 'Legs, Forearms & Abs',
                durationInHours: 0,
                durationInMinutes: 55,
                targetMuscleGroups: [muscleGroups.LEGS, muscleGroups.FOREARMS, muscleGroups.CORE],
                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Leg Press Machine',
                        sets: 4,
                        minReps: 10,
                        maxReps: 15,
                        targetMuscle: muscleGroups.LEGS
                    },
                    {
                        id: uuidv4(),
                        name: 'Leg Extension Machine',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.LEGS
                    },
                    {
                        id: uuidv4(),
                        name: 'Hamstring Curl Machine',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.LEGS
                    },
                    {
                        id: uuidv4(),
                        name: 'Forearm Curl',
                        sets: 3,
                        minReps: 12,
                        maxReps: 20,
                        targetMuscle: muscleGroups.FOREARMS
                    },
                    {
                        id: uuidv4(),
                        name: 'Reverse Forearm Curl',
                        sets: 3,
                        minReps: 12,
                        maxReps: 20,
                        targetMuscle: muscleGroups.FOREARMS
                    },
                    {
                        id: uuidv4(),
                        name: 'Cable Crunch',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.CORE
                    },
                    {
                        id: uuidv4(),
                        name: 'Hanging Leg Raise',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.CORE
                    }
                ]
            },
            {
                id: uuidv4(),
                name: 'Back & Triceps',
                durationInHours: 1,
                durationInMinutes: 5,
                targetMuscleGroups: [muscleGroups.BACK, muscleGroups.TRICEPS],
                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Wide Grip Lat Pulldown',
                        sets: 4,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BACK
                    },
                    {
                        id: uuidv4(),
                        name: 'Seated Cable Row',
                        sets: 4,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BACK
                    },
                    {
                        id: uuidv4(),
                        name: 'Back Extension',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.CORE
                    },
                    {
                        id: uuidv4(),
                        name: 'Rope Tricep Pushdown',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.TRICEPS
                    },
                    {
                        id: uuidv4(),
                        name: 'Close Grip Bench Press',
                        sets: 3,
                        minReps: 8,
                        maxReps: 10,
                        targetMuscle: muscleGroups.TRICEPS
                    }
                ]
            }
        ]
    },

    {
        id: uuidv4(),
        name: 'Leg day',
        focusedMuscleGroups: [muscleGroups.LEGS, muscleGroups.CORE],
        isActive: false,

        workouts: [
            {
                id: uuidv4(),
                name: 'Leg & Core',
                durationInHours: 0,
                durationInMinutes: 50,
                targetMuscleGroups: [muscleGroups.LEGS, muscleGroups.CORE],

                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Leg press',
                        sets: 4,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.LEGS
                    },

                    {
                        id: uuidv4(),
                        name: 'Leg Extension Machine',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.LEGS
                    },

                    {
                        id: uuidv4(),
                        name: 'Lower Back Machine',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.CORE
                    },

                    {
                        id: uuidv4(),
                        name: 'Leg Curls Machine',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.LEGS
                    },

                    {
                        id: uuidv4(),
                        name: 'Squats',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.LEGS
                    },

                    {
                        id: uuidv4(),
                        name: 'Cable Crunch',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.CORE
                    },

                    {
                        id: uuidv4(),
                        name: 'Leg Raises',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.CORE
                    },
                ]
            },

            {
                id: uuidv4(),
                name: 'Chest, Biceps & Forearms',
                durationInHours: 1,
                durationInMinutes: 10,
                targetMuscleGroups: [muscleGroups.CHEST, muscleGroups.BICEPS, muscleGroups.FOREARMS],

                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Flat Bench Press Machine',
                        sets: 3,
                        minReps: 6,
                        maxReps: 8,
                        targetMuscle: muscleGroups.CHEST
                    },

                    {
                        id: uuidv4(),
                        name: 'Incline Bench Press',
                        sets: 4,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.CHEST
                    },

                    {
                        id: uuidv4(),
                        name: 'Pec Fly Machine',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.CHEST
                    },

                    {
                        id: uuidv4(),
                        name: 'Cable Bicep Curl',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.BICEPS
                    } ,

                    {
                        id: uuidv4(),
                        name: 'Preacher Curl Machine',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.BICEPS
                    },

                    {
                        id: uuidv4(),
                        name: 'Hammer Curls',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BICEPS
                    },

                    {
                        id: uuidv4(),
                        name: 'Barbel Wrist Curls',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.FOREARMS
                    }
                ]
            },

            {
                id: uuidv4(),
                name: 'Legs & Core',
                durationInHours: 0,
                durationInMinutes: 55,
                targetMuscleGroups: [muscleGroups.LEGS, muscleGroups.CORE],
                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Leg Press Machine',
                        sets: 4,
                        minReps: 10,
                        maxReps: 15,
                        targetMuscle: muscleGroups.LEGS
                    },
                    {
                        id: uuidv4(),
                        name: 'Leg Extension Machine',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.LEGS
                    },
                    {
                        id: uuidv4(),
                        name: 'Hamstring Curl Machine',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.LEGS
                    },
                    {
                        id: uuidv4(),
                        name: 'Squats',
                        sets: 3,
                        minReps: 12,
                        maxReps: 20,
                        targetMuscle: muscleGroups.LEGS
                    },
                    {
                        id: uuidv4(),
                        name: 'Lower Back Machine',
                        sets: 3,
                        minReps: 12,
                        maxReps: 20,
                        targetMuscle: muscleGroups.CORE
                    },
                    {
                        id: uuidv4(),
                        name: 'Cable Crunch',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.CORE
                    },
                    {
                        id: uuidv4(),
                        name: 'Plank',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.CORE
                    }
                ]
            },

            {
                id: uuidv4(),
                name: 'Back, Triceps Shoulders',
                durationInHours: 1,
                durationInMinutes: 5,
                targetMuscleGroups: [muscleGroups.BACK, muscleGroups.TRICEPS, muscleGroups.SHOULDERS],
                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Wide Grip Lat Pulldown',
                        sets: 4,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BACK
                    },
                    {
                        id: uuidv4(),
                        name: 'Seated Cable Row',
                        sets: 4,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BACK
                    },
                    {
                        id: uuidv4(),
                        name: 'Back Extension',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.CORE
                    },
                    {
                        id: uuidv4(),
                        name: 'Rope Tricep Pushdown',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.TRICEPS
                    },
                    {
                        id: uuidv4(),
                        name: 'Close Grip Bench Press',
                        sets: 3,
                        minReps: 8,
                        maxReps: 10,
                        targetMuscle: muscleGroups.TRICEPS
                    },

                    {
                        id: uuidv4(),
                        name: 'Shoulder Press',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.SHOULDERS
                    },
                    
                    {
                        id: uuidv4(),
                        name: 'Rear Delt Fly Machine',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.SHOULDERS
                    },

                    {
                        id: uuidv4(),
                        name: 'Lateral Raises Machine',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.SHOULDERS
                    },

                ]
            }
        ]
    }
    ,
    {
        id: uuidv4(),
        name: 'Upper / Lower Program',
        focusedMuscleGroups: [muscleGroups.FULL_BODY],
        isActive: false,

        workouts: [
            {
                id: uuidv4(),
                name: 'Upper Body A',
                durationInHours: 1,
                durationInMinutes: 0,
                targetMuscleGroups: [
                    muscleGroups.CHEST,
                    muscleGroups.BACK,
                    muscleGroups.SHOULDERS,
                    muscleGroups.BICEPS,
                    muscleGroups.TRICEPS
                ],
                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Flat Bench Press',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.CHEST
                    },
                    {
                        id: uuidv4(),
                        name: 'Seated Cable Row',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BACK
                    },
                    {
                        id: uuidv4(),
                        name: 'Shoulder Press Machine',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.SHOULDERS
                    },
                    {
                        id: uuidv4(),
                        name: 'Cable Bicep Curl',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BICEPS
                    },
                    {
                        id: uuidv4(),
                        name: 'Rope Tricep Pushdown',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.TRICEPS
                    }
                ]
            },
            {
                id: uuidv4(),
                name: 'Lower Body',
                durationInHours: 1,
                durationInMinutes: 0,
                targetMuscleGroups: [muscleGroups.LEGS, muscleGroups.CORE],
                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Back Squat',
                        sets: 4,
                        minReps: 6,
                        maxReps: 10,
                        targetMuscle: muscleGroups.LEGS
                    },
                    {
                        id: uuidv4(),
                        name: 'Leg Press Machine',
                        sets: 3,
                        minReps: 10,
                        maxReps: 15,
                        targetMuscle: muscleGroups.LEGS
                    },
                    {
                        id: uuidv4(),
                        name: 'Romanian Deadlift',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.LEGS
                    },
                    {
                        id: uuidv4(),
                        name: 'Leg Curl Machine',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.LEGS
                    },
                    {
                        id: uuidv4(),
                        name: 'Hanging Leg Raise',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.CORE
                    }
                ]
            },
            {
                id: uuidv4(),
                name: 'Upper Body B',
                durationInHours: 1,
                durationInMinutes: 0,
                targetMuscleGroups: [
                    muscleGroups.CHEST,
                    muscleGroups.BACK,
                    muscleGroups.SHOULDERS,
                    muscleGroups.BICEPS,
                    muscleGroups.TRICEPS
                ],
                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Incline Bench Press',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.CHEST
                    },
                    {
                        id: uuidv4(),
                        name: 'Wide Grip Lat Pulldown',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BACK
                    },
                    {
                        id: uuidv4(),
                        name: 'Chest Supported Row',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BACK
                    },
                    {
                        id: uuidv4(),
                        name: 'Lateral Raise Machine',
                        sets: 3,
                        minReps: 10,
                        maxReps: 15,
                        targetMuscle: muscleGroups.SHOULDERS
                    },
                    {
                        id: uuidv4(),
                        name: 'Skull Crushers',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.TRICEPS
                    }
                ]
            }
        ]
    }
]