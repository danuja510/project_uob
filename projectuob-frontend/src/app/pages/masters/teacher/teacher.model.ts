export class Teacher{

  constructor(
    private slug: string,
    private teacherFirstName: string,
    private teacherLastName: string,
    private teacherEmail: string,
    private password: string,
    private imageUrl: string,
    private dateJoined: Date,
    private active: boolean
  ) {
  }
}
