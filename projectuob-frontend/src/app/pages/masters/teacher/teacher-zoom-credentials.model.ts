export class TeacherZoomCredentials{
  constructor(
    public teacherId: number,
    public zoomUserId: string,
    public zoomPassword: string,
    public zoomApiSecret: string,
    public zoomApiKey: string,
    public id?: number
  ) {
  }
}
