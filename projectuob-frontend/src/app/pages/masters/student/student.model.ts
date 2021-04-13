export class Student {

  constructor(public slug: string,
              public studentFirstName: string,
              public studentLastName: string,
              public studentEmail: string,
              public active?: boolean,
              public imageUrl?: string,
              public studentNumber?: number) {
  }

}
