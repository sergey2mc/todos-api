import { Schema } from 'mongoose';

export const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
    maxlength: 50
  },
}, {
  versionKey: false,
  timestamps: true,
});
