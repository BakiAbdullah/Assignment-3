import express, { Request, Response } from "express";
import { Books } from "../models/books.model";
import { BorrowedBook } from "../models/borrow.model";

export const booksRoutes = express.Router();

// CREATE a book
booksRoutes.post("/books", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await Books.create(body);

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

// GET all books
booksRoutes.get("/books", async (req: Request, res: Response) => {
  try {
    const data = await Books.find();

    res.status(201).json({
      success: true,
      message: "Books retrieved successfully",
      data,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

// GET a book by ID
booksRoutes.get("/books/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;

    const data = await Books.findById(bookId);
    res.status(201).json({
      success: true,
      message: "Book retrieved successfully",
      data,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

// Update a book by ID
booksRoutes.put("/books/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const updatedBody = req.body;
    const data = await Books.findByIdAndUpdate(bookId, updatedBody, {
      new: true,
    });

    res.status(201).json({
      success: true,
      message: "Book updated successfully.",
      data,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

// Delete a book by ID
booksRoutes.delete("/books/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const data = await Books.findOneAndDelete({_id: bookId})
    res.status(201).json({
      success: true,
      message: "Book deleted successfully.",
      data
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

// Borrow a book
booksRoutes.post("/borrow", async (req: Request, res: Response) => {
  try {
    const borrowBookBody = req.body
    console.log(borrowBookBody);
    
    const data = await BorrowedBook.create(borrowBookBody)
    res.status(201).json({
      success: true,
      message: "Book borrowed successfully.",
      data
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

// Get borrow books summary
booksRoutes.get("/borrow", async (req: Request, res: Response) => {
  try {
    res.status(201).json({
      success: true,
      message: "Borrowed books summary retrieved successfully.",
      // data
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});
