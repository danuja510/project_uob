export class Teacher{

  constructor(
    public slug: string,
    public teacherFirstName: string,
    public teacherLastName: string,
    public teacherEmail: string,
    public password: string,
    public imageUrl: string,
    public dateJoined: Date,
    public active: boolean,
    public teacherId?: string
  ) {
  }
}
