export class Subject{

  constructor(
    public sku: string,
    public teacherFirstName: string,
    public subjectName: string,
    public subjectDescription: string,
    public active: boolean,
    public subjectId?: string
  ) {
  }
}
