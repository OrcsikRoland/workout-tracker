export class WorkoutSession {
    id: number = 0; 
    date: string = '';
    workoutTypeId: number = 0;
    durationMinutes: number | null = null;
    caloriesBurned: number | null = null;
    notes?: string; 
}
