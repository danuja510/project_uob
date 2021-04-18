export class Course {
  constructor(
    public sku: string,
    public courseName: string,
    public courseDescription: string,
    public isActive: boolean,
    public perSessionPrice: number,
    public imageUrl: string,
    public dateCreated?: Date,
    public lastModified?: Date,
    public courseId?: number,
  ) {
  }
}
