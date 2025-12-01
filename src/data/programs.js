import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import { muscleGroups } from '../data/muscleGroups.js';

export const programs = [
    {
        id: uuidv4(),
        name: 'push Power',
        focusedMuscleGroups: [muscleGroups.CHEST, muscleGroups.SHOULDERS, muscleGroups.BICEPS],
        isActive: true,

        workouts: [
            {
                id: uuidv4(),
                name: 'Back & Triceps',
                durationInHours: 1,
                durationInMinutes: 0,
                targetMuscleGroups: [muscleGroups.BACK.id, muscleGroups.TRICEPS.id],

                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Lats pull down',
                        sets: 4,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BACK.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Cable Row Machine',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BACK.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Lower Back Machine',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.CORE.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Triceps Pushdown',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.TRICEPS.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Skull Crushers',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.TRICEPS.id
                    },
                ]
            },

            {
                id: uuidv4(),
                name: 'Chest & Biceps',
                durationInHours: 1,
                durationInMinutes: 10,
                targetMuscleGroups: [muscleGroups.CHEST.id, muscleGroups.BICEPS.id],

                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Flat Bench Press Machine',
                        sets: 3,
                        minReps: 6,
                        maxReps: 8,
                        targetMuscle: muscleGroups.CHEST.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Incline Bench Press',
                        sets: 4,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.CHEST.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Pec Fly Machine',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.CHEST.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Cable Bicep Curl',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.BICEPS.id
                    } ,

                    {
                        id: uuidv4(),
                        name: 'Preacher Curl Machine',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.BICEPS.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Hammer Curls',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BICEPS.id
                    }
                ]
            },

            {
                id: uuidv4(),
                name: 'Legs, Forearms & Abs',
                durationInHours: 0,
                durationInMinutes: 55,
                targetMuscleGroups: [muscleGroups.LEGS.id, muscleGroups.FOREARMS.id, muscleGroups.CORE.id],
                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Leg Press Machine',
                        sets: 4,
                        minReps: 10,
                        maxReps: 15,
                        targetMuscle: muscleGroups.LEGS.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Leg Extension Machine',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.LEGS.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Hamstring Curl Machine',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.LEGS.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Forearm Curl',
                        sets: 3,
                        minReps: 12,
                        maxReps: 20,
                        targetMuscle: muscleGroups.FOREARMS.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Reverse Forearm Curl',
                        sets: 3,
                        minReps: 12,
                        maxReps: 20,
                        targetMuscle: muscleGroups.FOREARMS.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Cable Crunch',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.CORE.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Hanging Leg Raise',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.CORE.id
                    }
                ]
            },
            {
                id: uuidv4(),
                name: 'Back & Triceps',
                durationInHours: 1,
                durationInMinutes: 5,
                targetMuscleGroups: [muscleGroups.BACK.id, muscleGroups.TRICEPS.id],
                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Wide Grip Lat Pulldown',
                        sets: 4,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BACK.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Seated Cable Row',
                        sets: 4,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BACK.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Back Extension',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.CORE.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Rope Tricep Pushdown',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.TRICEPS.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Close Grip Bench Press',
                        sets: 3,
                        minReps: 8,
                        maxReps: 10,
                        targetMuscle: muscleGroups.TRICEPS.id
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
                targetMuscleGroups: [muscleGroups.LEGS.id, muscleGroups.CORE.id],

                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Leg press',
                        sets: 4,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.LEGS.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Leg Extension Machine',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.LEGS.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Lower Back Machine',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.CORE.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Leg Curls Machine',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.LEGS.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Squats',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.LEGS.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Cable Crunch',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.CORE.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Leg Raises',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.CORE.id
                    },
                ]
            },

            {
                id: uuidv4(),
                name: 'Chest, Biceps & Forearms',
                durationInHours: 1,
                durationInMinutes: 10,
                targetMuscleGroups: [muscleGroups.CHEST.id, muscleGroups.BICEPS.id, muscleGroups.FOREARMS.id],

                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Flat Bench Press Machine',
                        sets: 3,
                        minReps: 6,
                        maxReps: 8,
                        targetMuscle: muscleGroups.CHEST.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Incline Bench Press',
                        sets: 4,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.CHEST.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Pec Fly Machine',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.CHEST.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Cable Bicep Curl',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.BICEPS.id
                    } ,

                    {
                        id: uuidv4(),
                        name: 'Preacher Curl Machine',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.BICEPS.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Hammer Curls',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BICEPS.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Barbel Wrist Curls',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.FOREARMS.id
                    }
                ]
            },

            {
                id: uuidv4(),
                name: 'Legs & Core',
                durationInHours: 0,
                durationInMinutes: 55,
                targetMuscleGroups: [muscleGroups.LEGS.id, muscleGroups.CORE.id],
                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Leg Press Machine',
                        sets: 4,
                        minReps: 10,
                        maxReps: 15,
                        targetMuscle: muscleGroups.LEGS.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Leg Extension Machine',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.LEGS.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Hamstring Curl Machine',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.LEGS.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Squats',
                        sets: 3,
                        minReps: 12,
                        maxReps: 20,
                        targetMuscle: muscleGroups.LEGS.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Lower Back Machine',
                        sets: 3,
                        minReps: 12,
                        maxReps: 20,
                        targetMuscle: muscleGroups.CORE.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Cable Crunch',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.CORE.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Plank',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.CORE.id
                    }
                ]
            },

            {
                id: uuidv4(),
                name: 'Back, Triceps Shoulders',
                durationInHours: 1,
                durationInMinutes: 5,
                targetMuscleGroups: [muscleGroups.BACK.id, muscleGroups.TRICEPS.id, muscleGroups.SHOULDERS.id],
                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Wide Grip Lat Pulldown',
                        sets: 4,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BACK.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Seated Cable Row',
                        sets: 4,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BACK.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Back Extension',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.CORE.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Rope Tricep Pushdown',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: muscleGroups.TRICEPS.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Close Grip Bench Press',
                        sets: 3,
                        minReps: 8,
                        maxReps: 10,
                        targetMuscle: muscleGroups.TRICEPS.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Shoulder Press',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.SHOULDERS.id
                    },
                    
                    {
                        id: uuidv4(),
                        name: 'Rear Delt Fly Machine',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.SHOULDERS.id
                    },

                    {
                        id: uuidv4(),
                        name: 'Lateral Raises Machine',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.SHOULDERS.id
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
                    muscleGroups.CHEST.id,
                    muscleGroups.BACK.id,
                    muscleGroups.SHOULDERS.id,
                    muscleGroups.BICEPS.id,
                    muscleGroups.TRICEPS.id
                ],
                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Flat Bench Press',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.CHEST.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Seated Cable Row',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BACK.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Shoulder Press Machine',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.SHOULDERS.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Cable Bicep Curl',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BICEPS.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Rope Tricep Pushdown',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.TRICEPS.id
                    }
                ]
            },
            {
                id: uuidv4(),
                name: 'Lower Body',
                durationInHours: 1,
                durationInMinutes: 0,
                targetMuscleGroups: [muscleGroups.LEGS.id, muscleGroups.CORE.id],
                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Back Squat',
                        sets: 4,
                        minReps: 6,
                        maxReps: 10,
                        targetMuscle: muscleGroups.LEGS.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Leg Press Machine',
                        sets: 3,
                        minReps: 10,
                        maxReps: 15,
                        targetMuscle: muscleGroups.LEGS.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Romanian Deadlift',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.LEGS.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Leg Curl Machine',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.LEGS.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Hanging Leg Raise',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: muscleGroups.CORE.id
                    }
                ]
            },
            {
                id: uuidv4(),
                name: 'Upper Body B',
                durationInHours: 1,
                durationInMinutes: 0,
                targetMuscleGroups: [
                    muscleGroups.CHEST.id,
                    muscleGroups.BACK.id,
                    muscleGroups.SHOULDERS.id,
                    muscleGroups.BICEPS.id,
                    muscleGroups.TRICEPS.id
                ],
                exercises: [
                    {
                        id: uuidv4(),
                        name: 'Incline Bench Press',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.CHEST.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Wide Grip Lat Pulldown',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BACK.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Chest Supported Row',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.BACK.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Lateral Raise Machine',
                        sets: 3,
                        minReps: 10,
                        maxReps: 15,
                        targetMuscle: muscleGroups.SHOULDERS.id
                    },
                    {
                        id: uuidv4(),
                        name: 'Skull Crushers',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: muscleGroups.TRICEPS.id
                    }
                ]
            }
        ]
    }
]