export class Teacher{

  constructor(
    public slug: string,
    public teacherFirstName: string,
    public teacherLastName: string,
    public teacherEmail: string,
    public dateJoined: Date,
    public active: boolean,
    public imageUrl?: string,
    public teacherId?: number
  ) {
  }
}
