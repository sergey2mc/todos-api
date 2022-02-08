import { Document, Types } from 'mongoose';

export class Todo {
  readonly _id: Types.ObjectId;

  text: string;
}

export type TodoDoc = Todo & Document;
