export const programs = [
    {
        name: 'push Power',
        banner: './assets/images/banners/defaultProgramFirstBanner.png',
        workoutsPerWeek: 4,
        focusedMuscleGrous: ['Chest', 'Shoulders'],
        isActive: false,

        workouts: [
            {
                name: 'Back & Triceps',
                banner: './assets/images/banners/defaultProgramFirstBanner.png',
                icon: './assets/images/icons/backIcon.png',
                durationInHours: 1,
                durationInMinutes: 0,
                targetMuscleGroups: ['Back', 'Triceps'],
                targetMuscleGroupsCount: 2,
                
                exercises: [
                    {
                        name: 'Lats pull down',
                        icon: './assets/images/icons/backIcon.png',
                        sets: 4,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: 'Back'
                    },

                    {
                        name: 'Cable Row Machine',
                        icon: './assets/images/icons/backIcon.png',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: 'Back'
                    },

                    {
                        name: 'Lower Back Machine',
                        icon: './assets/images/icons/backIcon.png',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: 'Back'
                    },

                    {
                        name: 'Triceps Pushdown',
                        icon: './assets/images/icons/tricepIcon.png',
                        sets: 3,
                        minReps: 10,
                        maxReps: 12,
                        targetMuscle: 'Triceps'
                    },

                    {
                        name: 'Skull Crushers',
                        icon: './assets/images/icons/tricepIcon.png',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: 'Triceps'
                    },
                ]
            },

            {
                name: 'Chest & Biceps',
                banner: './assets/images/banner/defaultProgramSecondBanner.png',
                icon: './assets/images/icons/chestIcon.png',
                durationInHours: 1,
                durationInMinutes: 10,
                targetMuscleGroups: ['Chest', 'Biceps'],
                targetMuscleGroupsCount: 2,

                exercises: [
                    {
                        name: 'Flat Bench Press Machine',
                        icon: './assets/images/icons/chestIcon.png',
                        sets: 3,
                        minReps: 6,
                        maxReps: 8,
                        targetMuscle: 'Chest'
                    },

                    {
                        name: 'Incline Bench Press',
                        icon: './assets/images/icons/chestIcon.png',
                        sets: 4,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: 'Chest'
                    },

                    {
                        name: 'Pec Fly Machine',
                        icon: './assets/images/icons/chestIcon.png',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: 'Chest'
                    },

                    {
                        name: 'Cable Bicep Curl',
                        icon: './assets/images/icons/bicepIcon.png',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: 'Biceps'
                    } ,

                    {
                        name: 'Preacher Curl Machine',
                        icon: './assets/images/icons/bicepIcon.png',
                        sets: 3,
                        minReps: 12,
                        maxReps: 15,
                        targetMuscle: 'Biceps'
                    },

                    {
                        name: 'Hammer Curls',
                        icon: './assets/images/icons/bicepIcon.png',
                        sets: 3,
                        minReps: 8,
                        maxReps: 12,
                        targetMuscle: 'Biceps'
                    }
                ]
            }
        ]
    }
]