const Joi = require('joi');
const Book = require('../models/book');

const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  summary: Joi.string().required(),
});

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = Joi.string().length(24).validate(id);

    if (error) {
      return res.status(400).json({ error: 'Invalid book ID' });
    }

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createBook = async (req, res) => {
  try {
    const { error, value } = bookSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { title, author, summary } = value;
    const book = new Book({ title, author, summary });
    await book.save();
    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { error: idError } = Joi.string().length(24).validate(id);

    if (idError) {
      return res.status(400).json({ error: 'Invalid book ID' });
    }

    const { title, author, summary } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, summary },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }

    const { error, value } = bookSchema.validate(updatedBook);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    res.json(updatedBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = Joi.string().length(24).validate(id);

    if (error) {
      return res.status(400).json({ error: 'Invalid book ID' });
    }

    const result = await Book.findByIdAndDelete({_id :id});
    if (!result) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.json({ message: 'Book deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
