import { Document, Model, model, Schema } from "mongoose";

export interface ISubject extends Document {
  id: string;
  name: string;
  sections: [
    {
      times: [
        {
          type: string;
          time: string;
          day: boolean;
          building: string;
          room: string;
        }
      ];
      instructor: string;
    }
  ];
}

export interface ISubjectModel extends Model<ISubject> {}

const SubjectSchema = new Schema({
  id: String,
  name: String,
  sections: [
    {
      times: [
        {
          type: String,
          time: String,
          day: Boolean,
          building: String,
          room: String
        }
      ],
      instructor: String
    }
  ]
});

export const SubjectModel: Model<ISubject> = model<ISubject>(
  "Subject",
  SubjectSchema
);
