import { Document, Model, model, Schema } from "mongoose";

export interface ISubject extends Document {
  id: string;
  name: string;
  sections: object;
}

export interface ISubjectModel extends Model<ISubject> {}

const SubjectSchema = new Schema({
  id: String,
  name: String,
  sections: Object
});

export const SubjectModel: Model<ISubject> = model<ISubject>(
  "1/2017",
  SubjectSchema
);
