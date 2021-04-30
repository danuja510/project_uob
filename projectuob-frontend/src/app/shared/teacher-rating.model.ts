export class TeacherRating{
  constructor(
    public studentId: number,
    public teacherId: number,
    public rating: number,
    public id?: number
  ) {
  }
}
