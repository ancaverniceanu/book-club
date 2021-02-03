import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  date: {
    type: String,
    required: [true, 'Please select a date.'],
  },
  book_name: {
    type: String,
    required: [true, 'Please add a book name.'],
  },
  book_author: {
    type: String,
    required: [true, 'Please add the book author.'],
  },
});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
