export class TeacherExperience{
  constructor(
    public title: string,
    public description: string,
    public from: Date,
    public to: Date,
    public currentlyWorking: boolean,
    public institution: string,
    public teacherId?: number
  ) {
  }
}
