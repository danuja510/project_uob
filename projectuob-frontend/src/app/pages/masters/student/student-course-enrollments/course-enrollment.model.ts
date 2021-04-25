export class CourseEnrollment{

  constructor(
    public courseId: number,
    public studentId: number,
    public noOfSessions: number,
    public no?: number,
    public enrollmentDate?: Date
  ) {
  }
}
