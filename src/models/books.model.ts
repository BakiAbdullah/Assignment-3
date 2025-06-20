import { model, Schema } from "mongoose";
import { IBooks, IBorrowBooks } from "../interfaces/books.interface";

const borrowSchema = new Schema<IBorrowBooks>({
  book: {
    type: Schema.Types.ObjectId,
    ref: "Books",
    required: true
  },
  quantity: { type: Number, required: true },
  dueDate: Date
});


const booksSchema = new Schema<IBooks>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      uppercase: true,
      enum: {
        values: [
          "FICTION",
          "NON_FICTION",
          "SCIENCE",
          "HISTORY",
          "BIOGRAPHY",
          "FANTASY",
        ],
      },
    },
    isbn: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    copies: {
      type: Number,
      required: true,
      min: 1,
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
  }
);

export const Books = model<IBooks>("Books", booksSchema);
