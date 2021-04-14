export class TeacherExperience{
  constructor(
    private title: string,
    private description: string,
    private from: Date,
    private to: Date,
    private currentlyWorking: boolean,
    private teacherId?: number
  ) {
  }
}
