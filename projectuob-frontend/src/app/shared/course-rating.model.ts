import {Student} from '../pages/masters/student/student.model';

export  class CourseRating{
  constructor(
    public studentId: number,
    public courseId: number,
    public rating: number,
    public id?: number
  ) {
  }
}
