import React, { useState } from 'react';

type Form = {
  date?: string;
  book_name?: string;
  book_author?: string;
};

const EventsForm = () => {
  const contentType = 'application/json';
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const [form, setForm] = useState({
    date: '',
    book_name: '',
    book_author: '',
  });

  const postData = async (form: Form) => {
    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(res.status.toString());
      }
      setMessage('Event added.');
      setForm({
        date: '',
        book_name: '',
        book_author: '',
      });
    } catch (error) {
      setMessage('Failed to add event');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      postData(form);
    } else {
      setErrors({ errs });
    }
  };

  const formValidate = () => {
    let err: any = {};
    if (!form.date) err.date = 'Date is required';
    if (!form.book_name) err.book_name = 'Book name is required';
    if (!form.book_author) err.book_author = 'Book author is required';
    return err;
  };

  return (
    <>
      <form className="pb-10 border-b" onSubmit={handleSubmit}>
        <div className="w-full mb-4 lg:w-1/2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="date">
            Date
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            name="date"
            id="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-full mb-4 lg:w-1/2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="book_name">
            Book name
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            name="book_name"
            id="book_name"
            type="text"
            value={form.book_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-full mb-4 lg:w-1/2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="book_author">
            Book author
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            name="book_author"
            id="book_author"
            type="text"
            value={form.book_author}
            onChange={handleChange}
            required
          />
        </div>
        <button
          id="submit"
          className="px-4 py-2 font-bold text-white bg-purple-500 rounded hover:bg-purple-700 focus:outline-none focus:shadow-outline bg-"
          type="submit"
        >
          Submit
        </button>
      </form>

      {message && (
        <div className="inline-flex items-center p-2 mt-6 text-sm leading-none text-purple-600 bg-white rounded-full shadow">
          <span className="inline-flex items-center justify-center h-6 px-3 text-white bg-purple-500 rounded-full text-">
            Status
          </span>
          <span className="inline-flex px-2">{message}</span>
        </div>
      )}

      {Object.keys(errors).map((err, index) => (
        <li key={index}>{err}</li>
      ))}
    </>
  );
};

export default EventsForm;
