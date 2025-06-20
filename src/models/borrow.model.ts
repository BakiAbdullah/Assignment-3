import { model, Schema } from "mongoose";
import { IBorrowBooks } from "../interfaces/books.interface";

const borrowBookSchema = new Schema<IBorrowBooks>({
  book: {
    type: Schema.Types.ObjectId,
    ref: "Books",
    required: true,
  },
  quantity: { type: Number, required: true },
  dueDate: Date,
});

export const BorrowedBook = model<IBorrowBooks>("BorrowedBook", borrowBookSchema);