export  class CourseRating{
  constructor(
    public studentId: number,
    public courseId: number,
    public rating: number,
    public id?: number
  ) {
  }
}
