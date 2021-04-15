export class Subject{

  constructor(
    public subjectName: string,
    public active: boolean,
    public sku?: string,
    public subjectDescription?: string,
    public subjectId?: number
  ) {
  }
}
