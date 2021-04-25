export class TimeSlot{
  constructor(
    public teacherId: number,
    public startTime: Date,
    public endTime: Date,
    public date: Date,
    public id?: number,
    public studentId?: number,
    public zoomLink?: string,
    public courseId?: number,
    public orderId?: number
  ) {
  }
}
